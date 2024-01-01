// src/components/WeeklyCalendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const localizer = momentLocalizer(moment);

const WeeklyCalendar = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [startDate, setStartDate] = useState(moment().startOf('week').toDate());

    useEffect(() => {
        setStartDate(moment().startOf('week').toDate());
    }, []);

    const handleDayClick = (date) => {
        setSelectedDay(date);
        // Reset time when a new day is selected
        setStartTime(null);
        setEndTime(null);
    };

    const handleTimeChange = (field, value) => {
        if (field === 'start') {
            setStartTime(value);
        } else if (field === 'end') {
            setEndTime(value);
        }
    };

    const handleNextWeek = () => {
        setStartDate(moment(startDate).add(1, 'week').toDate());
    };

    const handlePrevWeek = () => {
        setStartDate(moment(startDate).subtract(1, 'week').toDate());
    };

    const events = [
        // {
        //     title: 'Event 1',
        //     start: moment().startOf('week').add(1, 'days').add(12, 'hours').toDate(),
        //     end: moment().startOf('week').add(1, 'days').add(14, 'hours').toDate(),
        // },
        // Add more events as needed
    ];

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return ( 
    
        <>      <div><Navbar/></div>
        <div className="flex h-screen">
           
        <div><Sidebar/></div>  
            {/* Availability Section (Left Side) */}
            <div className="flex-none pr-4 w-1/4 ml-4 mb-5">
                {/* Adjusted width using 'w-1/4' */}
                <h2 className="text-lg font-semibold mb-4">Select Availability</h2>
                <div className="flex items-center mb-2">
                    <button className="text-blue-500" onClick={handlePrevWeek}>
                        Previous Week
                    </button>
                    <span className="ml-2 mr-2">|</span>
                    <button className="text-blue-500" onClick={handleNextWeek}>
                        Next Week
                    </button>
                </div>
                <ul>
                    {daysOfWeek.map((day, index) => (
                        <li key={index} className={`cursor-pointer ${moment(startDate).add(index, 'days').isSame(selectedDay, 'day') ? 'text-blue-500' : ''}`} onClick={() => handleDayClick(moment(startDate).add(index, 'days').toDate())}>
                            {moment(startDate).add(index, 'days').format('ddd, MMM D')}
                        </li>
                    ))}
                </ul>
                {selectedDay !== null && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Select Time Range</h2>
                        {/* Example: Use your time picker components here */}
                        <label>Start Time:</label>
                        <input
                            type="time"
                            value={startTime || ''}
                            onChange={(e) => handleTimeChange('start', e.target.value)}
                        />
                        <br />
                        <label>End Time:</label>
                        <input
                            type="time"
                            value={endTime || ''}
                            onChange={(e) => handleTimeChange('end', e.target.value)}
                        />
                    </div>
                )}
                {selectedDay !== null && startTime !== null && endTime !== null && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Selected Availability</h2>
                        <p>{moment(selectedDay).format('ddd, MMM D')}</p>
                        <p>{startTime} - {endTime}</p>
                    </div>
                )}
            </div>



            {/* Weekly Calendar Section (Right Side) */}
            <div className="flex-grow">
                {/* Adjusted width using 'flex-grow' */}
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView="week"
                    views={['week']}
                    step={15}
                    timeslots={4}
                    defaultDate={startDate}
                    onSelectEvent={(event) => console.log('Event selected:', event)}
                    onSelectSlot={(slotInfo) => handleDayClick(slotInfo.start)}
                />
                {/* Display the selected day and time range */}

            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    );
};

export default WeeklyCalendar;
