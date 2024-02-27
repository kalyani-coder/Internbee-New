import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const WeeklyCalendar = () => (
  <>
    <div>
      <Navbar /> </div> <div className="displayBlock flex max-h-">
      <Sidebar />


      <iframe src="https://calendar.google.com/calendar/embed?src=ed9c9ca89b638b4746bdf5d15506734f8903870b7d4380eec92704e113e70481%40group.calendar.google.com&ctz=Asia%2FKolkata" 
      
      style={{
          border: "0",
          width: "800px",
          height: "600px", frameborder: "0",
          scrolling: "no",
        }}
      
      
      
      ></iframe>



    </div>
    <div>
      <Footer />
    </div>
  </>
);

export default WeeklyCalendar;