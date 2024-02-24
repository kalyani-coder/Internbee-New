import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Home1 from "./Components/Home1";

import Resume from "./Components/Resume";
import Registration from "./Components/Registration";
import Signin from "./Components/Signin";
import Profile from "./Components/Profile";
import Internship from "./Components/Internship";
import Footer from "./Components/Footer";
// import Companies from "./Components/Companies/Companies";
import Blogs from "./Components/Blogs/Blogs";
import ViewProfile from "./Components/ViewProfile/ViewProfile";
import UploadImagePdf from "./Components/UploadImagePdf/UploadImage";
import ApplyInternship from "./Components/ApplyInternship/ApplyInternship";
import AppliedIntersnship from "./Components/ApplyInternship/AppliedIntersnship";
import FreePlan from "./Components/StudentPackages/FreePlan";
import MonthlyPlan from "./Components/StudentPackages/MonthlyPlan";
import EnquiryPage from "./Components/ApplyInternship/EnquiryPage";
import PolicyTermsCondition from "./Components/PrivacyPolicy/PolicyTermsCondition";
import MonthlyPackages from "./Components/StudentPackages/MonthlyPlan";
import SubscribePackage from "./Components/StudentPackages/SubscribePackage";
import EnterOtpPage from "./Components/EnterOtpPage/EnterOtpPage";
import FAQPage from "./Components/Faqs/Faqs";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/Contact/Contactus";
import Navbar from "./Components/Navbar";
import Internal_Navbar from "./Components/InternalNavbar";
import SignupOtp from "./Components/SignupOtp/SignupOtp";
import Alert from "./Components/Alert/Alert";
import Privacy from "./Components/Privacy/Privacy" ;
import Terms from "./Components/Terms/Terms";
import Refund from "./Components/Refund/Refund";
import Applied_Intern_Internal_Navbar from "./Components/Test/Applied_Intern_Internal_Navbar";
import QuickNav from "./Components/QuickNav";
function App() {
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.ctrlKey && e.key === 'c') {
  //       e.preventDefault();
  //       console.log("Copying is disabled!");
  //       // You can add a custom message or behavior here if needed
  //     }
  //   };

  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //     console.log("Right-clicking is disabled!");
  //     // You can add a custom message or behavior here if needed
  //   };

  //   document.addEventListener('keydown', handleKeyDown);
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/Profile" element={<Profile />} />
         <Route path="/quicknav"element={<QuickNav/>} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/enterotp" element={<EnterOtpPage />} />
        <Route path="/home" element={<Home1 />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/nav" element={<Internal_Navbar />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/uploadimage" element={<UploadImagePdf />} />
        <Route
          path="/apply-internship/:internshipId"
          element={<ApplyInternship />}
        />
        <Route path="/applied-internship" element={<AppliedIntersnship />} />
        <Route path="/freeplan" element={<FreePlan />} />
        <Route path="/monthlyplan" element={<MonthlyPackages />} />
        <Route path="/subscribepackage" element={<SubscribePackage />} />
        <Route path="/studentEnquiry" element={<EnquiryPage />} />
        <Route path="/privacypolicy" element={<PolicyTermsCondition />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signupotp" element={<SignupOtp />} />
        <Route path="/privacy"element={<Privacy/>}/>
        <Route path="/terms"element={<Terms/>}/>
        <Route path="/refund"element={<Refund/>}/>
        <Route path="/Test"element={<Applied_Intern_Internal_Navbar/>}/>

        {/* <Route path="/Test" element={<Applied_Intern_Internal_Navbar/>} */}
      </Routes>
    </Router>

    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/Packages" element={<Packages />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
