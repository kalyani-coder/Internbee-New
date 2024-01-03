import React, { useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './LandingPage.css';
import Partners from './Partners';
// import Footer from './Footer';
import Footer from './../Footer';
// import Footer from './../Footer/Footer';


const LandingPage = () => {
    const [trackerWidth, setTrackerWidth] = useState(0);
    const carouselRef = useRef(null);

    const handleTrackerHover = () => {
        setTrackerWidth(100);
    };

    const handleTrackerLeave = () => {
        setTrackerWidth(0);
    };

    const handleArrowClick = (direction) => {
        const carousel = carouselRef.current;

        if (carousel) {
            const scrollWidth = carousel.scrollWidth;
            const scrollLeft = carousel.scrollLeft;
            const clientWidth = carousel.clientWidth;

            let newScrollLeft;

            if (direction === 'left') {
                newScrollLeft = scrollLeft - clientWidth;
            } else {
                newScrollLeft = scrollLeft + clientWidth;
            }

            carousel.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex flex-col h-screen">



            {/* Section 2: Latest Internships and Categories */}
            <section section className="flex-1 p-20 " id="dream-career-section" >
                <h1 className="heading ">
                    Latest Internships on InternBee
                </h1>

                {/* Popular Categories */}
                <div className="categories flex gap-10 ml-80">
                    <p>Popular Categories:</p>
                    <ul className='flex gap-5'>
                        <li>Work from Home</li>
                        <li>Part-Time</li>
                    </ul>
                </div>

                {/* card-landing-page Carousel */}
                <div className="carousel-container mt-5 overflow-hidden">
                    <div className="carousel" ref={carouselRef}>
                        {/* Dummy Data for card-landing-page Carousel */}
                        <div className="card-landing-page">
                            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">


                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">Internship Title 1</h2>
                                    <p className="text-gray-700 mb-2">Company Name 1</p>
                                    <hr className="my-2" />

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-gray-600">Location: City 1</p>
                                            <p className="text-gray-600">Stipend: $500</p>
                                            <p className="text-gray-600">Duration: 3 months</p>
                                        </div>

                                        <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-landing-page">
                            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">

                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">Internship Title 2</h2>
                                    <p className="text-gray-700 mb-2">Company Name 2</p>
                                    <hr className="my-2" />

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-gray-600">Location: City 2</p>
                                            <p className="text-gray-600">Stipend: $600</p>
                                            <p className="text-gray-600">Duration: 4 months</p>
                                        </div>

                                        <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-landing-page">
                            <div className="card-landing-page">
                                <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">

                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold mb-2">Internship Title 3</h2>
                                        <p className="text-gray-700 mb-2">Company Name 3</p>
                                        <hr className="my-2" />

                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <p className="text-gray-600">Location: City 3</p>
                                                <p className="text-gray-600">Stipend: $700</p>
                                                <p className="text-gray-600">Duration: 5 months</p>
                                            </div>

                                            <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Section 3: Another Section */}


            {/* section 4 */}

            <section section className="flex-1" id="dream-career-section" >
                <h1 className="heading">
                    Latest jobs on InternBee
                </h1>

                {/* Popular Categories */}
                <div className="categories flex gap-10 ml-80">
                    <p>Popular Categories:</p>
                    <ul className='flex gap-5'>
                        <li>Work from Home</li>
                        <li>Part-Time</li>
                    </ul>
                </div>

                {/* card-landing-page Carousel */}
                <div className="carousel-container mt-5 overflow-hidden">
                    <div className="carousel h-96" ref={carouselRef}>
                        {/* Dummy Data for card-landing-page Carousel */}
                        <div className="card-landing-page">
                            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">

                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">Internship Title 1</h2>
                                    <p className="text-gray-700 mb-2">Company Name 1</p>
                                    <hr className="my-2" />

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-gray-600">Location: City 1</p>
                                            <p className="text-gray-600">Stipend: $500</p>
                                            <p className="text-gray-600">Duration: 3 months</p>
                                        </div>

                                        <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-landing-page">
                            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">

                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">Internship Title 2</h2>
                                    <p className="text-gray-700 mb-2">Company Name 2</p>
                                    <hr className="my-2" />

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-gray-600">Location: City 2</p>
                                            <p className="text-gray-600">Stipend: $600</p>
                                            <p className="text-gray-600">Duration: 4 months</p>
                                        </div>

                                        <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-landing-page">
                            <div className="card-landing-page">
                                <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">

                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold mb-2">Internship Title 3</h2>
                                        <p className="text-gray-700 mb-2">Company Name 3</p>
                                        <hr className="my-2" />

                                        <div className="flex items-center justify-between mt-2">
                                            <div>
                                                <p className="text-gray-600">Location: City 3</p>
                                                <p className="text-gray-600">Stipend: $700</p>
                                                <p className="text-gray-600">Duration: 5 months</p>
                                            </div>

                                            <button className=" bg-yellow-300 text-black px-4 py-2 rounded-md focus:outline-none">Apply Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* section 5 */}


            <section section id="dream-career-section" >
                <div className='text-center'>
                    <h1 className="text-2xl font-semibold mb-6 text-center">Top companies trust us</h1>
                </div>
                <Partners />


                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">2.7K+</h2>
                                <p className="leading-relaxed">Companies hiring</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">1.8K+</h2>
                                <p className="leading-relaxed">New openings everyday</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">21Mn+</h2>
                                <p className="leading-relaxed">active students</p>
                            </div>
                            <div className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">600K+</h2>
                                <p className="leading-relaxed">learners</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section >



            {/* section 4 */}

            <div div >
                <Footer />
            </div >

        </div >
    );
};

export default LandingPage;
