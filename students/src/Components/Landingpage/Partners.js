import React from 'react'
import "./Partners.css"
import logo1 from "../../Assets/304743924_389900849981742_4456100062582155256_n-removebg-preview.png";
import logo2 from "../../Assets/311981348_487890916713782_7844063849198428271_n-removebg-preview.png";
import logo3 from "../../Assets/download__1_-removebg-preview.png";
import logo4 from "../../Assets/download-removebg-preview (1).png";
import logo5 from "../../Assets/innerspace_logo-removebg-preview.png";
import logo6 from "../../Assets/jawk_softwares_logo-removebg-preview.png";
import logo7 from "../../Assets/SC_Logo-removebg-preview.png";
const Partners = () => {
    return (
        <>
            <div className="all-partners">
                <div className="wid-fr-partners">

                    <div className="logo-for-partners" >
                    <div className="items-center">
                        <img src={logo1} alt="Footer Logo" className="" style={{ height:'8rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo2} alt="Footer Logo" className="" style={{ height:'8rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo3} alt="Footer Logo" className="" style={{ height:'2rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo4} alt="Footer Logo" className="" style={{ height:'8rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo5} alt="Footer Logo" className="" style={{ height:'2rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo6} alt="Footer Logo" className="" style={{ height:'8rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    <div className="items-center">
                        <img src={logo7} alt="Footer Logo" className="" style={{ height:'8rem'}}/>
                        {/* <p className="text-xl font-bold ">Interns  <span className='text-white'>Bee</span></p> */}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners