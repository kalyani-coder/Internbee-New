import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import SubscriptionMonthly from './Components/Subscription/SubscriptionMonthly';
import Footer from './Components/Footer/Footer';
import ShortlistedCandidates from './Components/ShortlistedCandidates/ShortlistedCandidates';
import EmployerPackages from './Components/EmployerPackege/ViewEmployerPackage';
import JobList from './Components/JobList/JobList';
import Candidates from './Components/Candidates/Candidates';
import Employer from './Components/Employer/Employer';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import LowerContent from './Components/AdminDashboard/LowerContent';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute';
import AuthWrapper from './Components/protectedRoute/AuthWrapper';
import AboutUs from './Components/AboutUs/AboutUs';
import ViewInternship from './Components/ViewPostInternship/ViewInternship';
import ViewProfile from './Components/ViewProfile/ViewProfile';
import Blog from './Components/Blog/Blog';
import CreateBlog from './Components/Blog/CreateBlog';
import SubscriptionAnnually from './Components/Subscription/SubscriptionAnnually';
import NewJobList from './Components/JobList/NewJobList';
import StudentSubscriptionMonthly from './Components/Subscription/StudentSubscriptionMonthly';
import StudentSubscriptionFree from './Components/Subscription/StudentSubscriptionFree';
import GenerateReport from './Components/Generate Report/GenerateReport';
import TPO from './Components/TPO/TPO';



const App = () => {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/viewshortlistedcandidates' element={<ShortlistedCandidates />} />
          <Route path='/employer' element={<Employer />} />
          <Route path='/viewemployerpackages' element={<EmployerPackages />} />
          <Route path='/viewjoblist' element={<JobList />} />
          <Route path='/subscriptionmonthly' element={<SubscriptionMonthly />} />
          <Route path='/sidebar' element={<Sidebar />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/postinternship' element={<ViewInternship />} />
          <Route path='/viewprofile' element={<ViewProfile />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path="/subscriptionannually" element={<SubscriptionAnnually/>}/>
          <Route path="/newjoblist" element={<NewJobList/>}/>
          <Route path="/studentmonthlysubcription" element={<StudentSubscriptionMonthly/>}/>
          <Route path="/studentfreesubcription" element={<StudentSubscriptionFree/>}/>
          <Route path="/generatereport" element={<GenerateReport/>}/>
          <Route path="/tpo" element={<TPO/>}/>


        </Routes>
      </Router>



    </div>
  )
}
export default App;
