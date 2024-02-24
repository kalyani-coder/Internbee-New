import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Component/Login/Login"
import EmployerRegistration from './Component/Signup/Signup';
import Packages from './Component/Packages/MonthlyPackages';
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
import FAQPage from './Component/FAQ/Faq';
import ViewStudentProfile from './Jobs/ViewStudentProfile';
import GetPackage from './Component/GetPackage/GetPackage';
import GetPackageAnually from './Component/GetPackage/GetPackageAnually';
import ListofShortlist from './Component/Candidates/ListofShortlist';
import AnuallyPackages from './Component/Packages/AnuallyPackages';
import MonthlyPackages from './Component/Packages/MonthlyPackages';
import ResolveMessage from './Component/Message/ResolveMessage';
import PolicyTermsCondition from './Component/TermsAndConditions/PolicyTermsCondition';
import Blog from "./Component/Blogs/Blog";
import Otp from './Component/OTP/Otp';
import Contact from './Component/Contact/Contact';
import AboutUsEmp from './Component/Aboutus/Aboutusemp';
import NavbarEmp from './Component/Aboutus/NavbarEmp';
import SignupOtp from './Component/SignupOtp/SignupOtp';
import AppliedCandidates from './Component/AppliedCandidates/AppliedCandidates';
import Privacy from './Component/Privacy/Privacy';
import Terms from './Component/Terms/Terms';
import Refund from './Component/Refund/Refund';
import Alert from './Component/Alert/Alert';
function App() {

  const [monthlyPackage, setMonthlyPackage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend.internsbee.com/api/adminmonthlypackage');
        const data = await response.json();
        setMonthlyPackage(data[0]); // Assuming the response is an array with a single object
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
          <Route path="/faq" element={<FAQPage />} />
          <Route path='/viewstudentprofile/:id' element={<ViewStudentProfile />} />
          <Route path='/getpackage' element={<GetPackage monthlyPackage={monthlyPackage}/>} />
          <Route path='getpackageanually' element={<GetPackageAnually />} />
          <Route path='/shortlisted/:id' element={<ListofShortlist />} />
          <Route path='/anuallypackage' element={<AnuallyPackages />} />



          <Route path='/monthlypackage' element={<MonthlyPackages />} />

          <Route path='/resolve/:id' element={<ResolveMessage/>}/>
          <Route path='/privacypolicy' element={<PolicyTermsCondition/>}/>


          {/* //////////////////////////////////// */}
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/aboutusemp'element={<AboutUsEmp/>}/>
          <Route path='/navbaremp'element={<NavbarEmp/>}/>
          <Route path='/signupotp'element={<SignupOtp/>}/>
          <Route path='/navbar'element={<Navbar/>}/>
          <Route path='/appliedcandidates'element={<AppliedCandidates/>}/>
           <Route path='/privacy'element={<Privacy/>}/>
           <Route path='/terms'element={<Terms/>}/>
           <Route path='/refund'element={<Refund/>}/>
           {/* <Route path='/HomeNav'element={<Navbar/>}/> */}

    
        </Routes>
      </Router>
      
    </>
  );
}

export default App;





