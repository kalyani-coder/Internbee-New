import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Component/Login/Login"
import EmployerRegistration from './Component/Signup/Signup';
import Packages from './Component/Packages/Packages';
import EmployerSection from './Component/HomePage/HomePage';
import ViewProfilePage from './Component/ViewProfile/ViewProfile';
import EmployerSidebar from './Component/Sidebar/Sidebar';
import Navbar from './Component/Navbar/Navbar';
import Jobs from './Jobs/Jobs';
import PostInternship from './Component/HomePage/PostInternship/PostInternship';
import Sidebar from './Component/Sidebar/Sidebar';
import WeeklyCalendar from './Component/Calender/Calender';
import CandidatePage from './Component/Candidates/Candidates';
import SearchCVPage from './Component/Searchcv/Searchcv';
import AccountSettings from './Component/AccountSetting/AccountSetting';
import MessageComponent from './Component/Message/Message';
import Registration from './Component/Signup/Signup';
import LandingpageHome from './Component/Landingpage/LandingpageHome';
import AboutUs from './Component/Aboutus/AboutUs';

function App() {
  return (
    <>

      <Router>

        <Routes>
          <Route path="/" element={<LandingpageHome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path="/home" element={<EmployerSection />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/postinternship' element={<PostInternship />} />
          <Route path="/employer-registration" element={<EmployerRegistration />} />
          <Route path="/sidebar" element={<EmployerSidebar />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path='/postinternship' element={<PostInternship />} />
          <Route path='/weeklycalender' element={<WeeklyCalendar />} />
          <Route path="/candidates" element={<CandidatePage />} />
          <Route path='/accountsetting' element={<AccountSettings />} />
          <Route path='/searchcv' element={<SearchCVPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/view-profile-page" element={<ViewProfilePage />} />
          <Route path='/Sidebar' element={<Jobs />} />
          <Route path='/message' element={<MessageComponent />} />
        </Routes>

      </Router>



    </>
  );
}

export default App;
