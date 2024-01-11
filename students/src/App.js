import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Home1 from './Components/Home1';

import Resume from './Components/Resume';
import Registration from './Components/Registration';
import Signin from './Components/Signin';
import Profile from './Components/Profile';
import Internship from './Components/Internship';
import Footer from './Components/Footer';
import Companies from './Components/Companies/Companies';
import Blogs from './Components/Blogs/Blogs';
import ViewProfile from './Components/ViewProfile/ViewProfile';
import UploadImagePdf from './Components/UploadImagePdf/UploadImage';
import ApplyInternship from './Components/ApplyInternship/ApplyInternship';
import AppliedIntersnship from './Components/ApplyInternship/AppliedIntersnship';
import FreePlan from './Components/StudentPackages/FreePlan';
import MonthlyPlan from './Components/StudentPackages/MonthlyPlan';






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

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/home" element={<Home1 />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/uploadimage" element={<UploadImagePdf />} />
        <Route path="/apply-internship/:internshipId" element={<ApplyInternship />} />
        <Route path="/applied-internship" element={<AppliedIntersnship />} />
        <Route path="/freeplan" element={<FreePlan />} />
        <Route path="/monthlyplan" element={<MonthlyPlan />} />





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
