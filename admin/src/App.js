import React,{useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Subscription from './Components/Subscription/Subscription';
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






 const App = () => {


  return (
    <div>
     
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/candidates' element={<Candidates/>}/>
        <Route path='/viewshortlistedcandidates' element={<ShortlistedCandidates/>}/>
        <Route path='/employer' element={<Employer/>}/>
        <Route path='/viewemployerpackages' element={<EmployerPackages/>}/>
        <Route path='/viewjoblist' element={<JobList/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/footer' element={<Footer/>}/>

        </Routes>
      </Router>

   

    </div>
  )
}
export default App;
