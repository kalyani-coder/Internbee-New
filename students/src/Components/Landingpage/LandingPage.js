import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./LandingPage.css";
import "../ResponsiveCss/ResponsiveCss.css";
import Partners from "./Partners";
// import Footer from './Footer';
// import Footer from './../Footer';
import Footer from "../Footer";
import Carousel from "./Carousel";
import hero from "../../Assets/home-hero.svg";
import Registration from "../Registration";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import landingpageimg from "../../Assets/home.png"
const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;
const CountUpAnimation = ({ children, duration = 2000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => {
      clearInterval(counter);
    };
  }, [countTo, duration]);

  return <span>{Math.floor(count)}</span>;
};


const LandingPage = () => {
  const images = [
    "https://dummyimage.com/500x500/000/fff",
    "https://dummyimage.com/600x400/555/eee",
    "https://dummyimage.com/600x400/888/ddd",
    // Add more dummy image URLs as needed
  ];
  const [trackerWidth, setTrackerWidth] = useState(0);
  const carouselRef = useRef(null);
  const carouselsRef = useRef(null);
  const [internships, setInternships] = useState([]);
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

      if (direction === "left") {
        newScrollLeft = scrollLeft - clientWidth;
      } else {
        newScrollLeft = scrollLeft + clientWidth;
      }

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/postinternship/"
        );
        if (response.ok) {
          const data = await response.json();
          setInternships(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  //   const handleNextSlide = () => {
  //     const carousel = carouselRef.current;
  //     if (carousel) {
  //       const scrollWidth = carousel.scrollWidth;
  //       const scrollLeft = carousel.scrollLeft;
  //       const clientWidth = carousel.clientWidth;
  //       const maxScrollLeft = scrollWidth - clientWidth;
  //       const newScrollLeft = Math.min(scrollLeft + clientWidth, maxScrollLeft);

  //       carousel.scrollTo({
  //         left: newScrollLeft,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  //   const handlePreviousSlide = () => {
  //     const carousel = carouselRef.current;
  //     if (carousel) {
  //       const scrollLeft = carousel.scrollLeft;
  //       const newScrollLeft = Math.max(scrollLeft - carousel.clientWidth, 0);

  //       carousel.scrollTo({
  //         left: newScrollLeft,
  //         behavior: "smooth",
  //       });
  //     }
  //   };
  const handleNextSlide = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth;
      const scrollLeft = carousel.scrollLeft;
      const clientWidth = carousel.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const newScrollLeft = Math.min(scrollLeft + clientWidth, maxScrollLeft);

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handlePreviousSlide = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const scrollLeft = carousel.scrollLeft;
      const newScrollLeft = Math.max(scrollLeft - carousel.clientWidth, 0);

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  ////////////////////////////////////////
  const handleNextCarouselSlide = () => {
    const carousel = carouselsRef.current;
    if (carousel) {
      const scrollWidth = carousel.scrollWidth;
      const scrollLeft = carousel.scrollLeft;
      const clientWidth = carousel.clientWidth;
      const maxScrollLeft = scrollWidth - clientWidth;
      const newScrollLeft = Math.min(scrollLeft + clientWidth, maxScrollLeft);

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  const handlePreviousCarouselSlide = () => {
    const carousel = carouselsRef.current;
    if (carousel) {
      const scrollLeft = carousel.scrollLeft;
      const newScrollLeft = Math.max(scrollLeft - carousel.clientWidth, 0);

      carousel.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };
  ////////////////////////////////////////
  return (
    <div className="flex flex-col h-screen">
      <section className="landingpage-hero-content text-gray-600 body-font">
       {/* <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-2 md:mb-0 items-center text-center">
            <h1 className="landingpage-title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-left">
              Your Journey to
              <br className="hidden lg:inline-block" />
              Success Begins Here!!!
            </h1>
          </div>
          <div className=" landingpage-hero-image lg:w-full md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
  </div>*/}
  <div>
    <img src={landingpageimg}/>
  </div>
      </section>

      {/* Section 2: Latest Internships and Categories */}
      <section
        className="landingpage-latest-internships flex-1 p-20"
        id="dream-career-section"
      >
        <h1 className="heading ">Latest Internships on InternsBee</h1>

        {/* Popular Categories */}

        {/* card-landing-page Carousel */}
        <div className="carousel-container mt-5 overflow-hidden ">
          <div className="carousel justify-content-center" ref={carouselsRef}>
            {internships.map((internship) => (
              <div className="card-landing-page">
                <div className="width-for-each-card-scrollable  bg-white rounded-md overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {internship.job_Title}
                    </h2>
                    <p className="text-gray-700 mb-2"> {internship.company}</p>
                    <hr className="my-2" />

                    <div className="flex items-center justify-between mt-2 locations-stipend-duration-and-btn-for-landing-page-card">
                      <div>
                        <p className="text-gray-600">
                          Location:{internship.location}
                        </p>
                        <p className="text-gray-600">
                          Stipend: {internship.stipend}{" "}
                        </p>
                        <p className="text-gray-600">
                          Duration:{internship.duration}{" "}
                        </p>
                      </div>
                      <Link to={`/applyinternshiplanding/${internship._id}`}>
                        <button
                          className=" text-black px-4 py-2 rounded-md focus:outline-none"
                          style={{ backgroundColor: "#FFBD59" }}
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="card-landing-page">
              <div className="width-for-each-card-scrollable max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    Business Development Intern
                  </h2>
                  <p className="text-gray-700 mb-2">Parallel Minds</p>
                  <hr className="my-2" />

                  <div className="flex items-center justify-between mt-2 locations-stipend-duration-and-btn-for-landing-page-card">
                    <div>
                      <p className="text-gray-600">Location: Pune</p>
                      <p className="text-gray-600">
                        Stipend: Performance Based
                      </p>
                      <p className="text-gray-600">Duration: 6 months</p>
                    </div>

                    <Link to={"/login"}>
                      <button
                        className=" text-black px-4 py-2 rounded-md focus:outline-none"
                        style={{ backgroundColor: "#FFBD59" }}
                      >
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-landing-page">
              <div className="card-landing-page">
                <div className="width-for-each-card-scrollable max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      Market Research Intern
                    </h2>
                    <p className="text-gray-700 mb-2">Ecozen Solutions</p>
                    <hr className="my-2" />

                    <div className="flex items-center justify-between mt-2 locations-stipend-duration-and-btn-for-landing-page-card">
                      <div>
                        <p className="text-gray-600">Location: Pune</p>
                        <p className="text-gray-600">
                          Stipend: performance Based
                        </p>
                        <p className="text-gray-600">Duration: 3 months</p>
                      </div>

                      <Link to={"/login"}>
                        <button
                          className=" text-black px-4 py-2 rounded-md focus:outline-none"
                          style={{ backgroundColor: "#FFBD59" }}
                        >
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-landing-page">
              <div className="card-landing-page">
                <div className="width-for-each-card-scrollable max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      Software Testing Intern (Part Time)
                    </h2>
                    <p className="text-gray-700 mb-2">Scoopen</p>
                    <hr className="my-2" />

                    <div className="flex items-center justify-between mt-2 locations-stipend-duration-and-btn-for-landing-page-card">
                      <div>
                        <p className="text-gray-600">Location: Pune</p>
                        <p className="text-gray-600">
                          Stipend: Performance based
                        </p>
                        <p className="text-gray-600">Duration: 2 months</p>
                      </div>

                      <Link to={"/login"}>
                        <button
                          className=" text-black px-4 py-2 rounded-md focus:outline-none"
                          style={{ backgroundColor: "#FFBD59" }}
                        >
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="upperSectionbtnslider text-3xl flex items-center justify-center gap-12 mb-20">
            <button onClick={handlePreviousCarouselSlide}>
              <GrPrevious />
            </button>
            <button onClick={handleNextCarouselSlide}>
              <GrNext />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Another Section */}

      {/* section 4 */}

      

      {/* /////////////////////////////////////////////////////////////////////////// */}

      {/* section 5 */}

      <section className="landingpage-top-companies" id="dream-career-section">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Top companies trust us
          </h1>
        </div>
        <Partners />

        <section className="landingpage-statistics" id="dream-career-section">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center justify-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">
                <CountUpAnimation duration={1000}>500</CountUpAnimation>+
                </h2>
                <p className="leading-relaxed">Companies hiring</p>
              </div>
              


              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">
                <CountUpAnimation duration={1000}>200</CountUpAnimation>+
                </h2>
                <p className="leading-relaxed">New openings everyday</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-sky-900">
                <CountUpAnimation duration={1000}>2000</CountUpAnimation>+
                </h2>
                <p className="leading-relaxed">active students</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* section 4 */}

      <div className="landingpage-footer">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
