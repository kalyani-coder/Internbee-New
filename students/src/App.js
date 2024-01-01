import React from 'react';
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







function App() {
  return (

    <Router>
      <Routes>
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home1" element={<Home1/>} />

        <Route path="/Resume" element={<Resume />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Internship" element={<Internship />} />
        <Route path="/Footer" element={<Footer />} />





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
