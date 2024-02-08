import React , { useState, useEffect } from 'react'
import "./LowerContent.css"
import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.jpg'
import img8 from '../../Assets/8.jpg'
import img9 from '../../Assets/9.jpg'
import img10 from '../../Assets/10.jpg'
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const LowerContent = () => {
  
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [candidates, setCandidates] = useState([]);


  useEffect(() => {
    // Fetch data from the API
    fetch('https://backend.internsbee.com/api/applyInternship')
      .then(response => response.json())
      .then(apiData => setData(apiData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);




  useEffect(() => {
    // Fetch data from the API
    fetch('https://backend.internsbee.com/api/postinternship/')
      .then(response => response.json())
      .then(apiData => {
        // Filter jobs posted within the last 3 days
        const currentDate = new Date();
        const filteredData = apiData.filter(job => {
          const jobDate = new Date(
            job.start_Date.split('/').reverse().join('-') // Assuming start_Date is the field representing the job posting date
          );
          const timeDifference = currentDate - jobDate;
          const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
          return daysDifference <= 3;
        });
        setData2(filteredData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  useEffect(() => {
    // Fetch data from the API
    fetch('https://backend.internsbee.com/api/studentsdetails')
      .then(response => response.json())
      .then(apiData => {
        const currentDate = new Date();
        const filteredCandidates = apiData.filter(candidate => {
          const candidateDate = new Date(candidate.date); // Assuming there's a 'date' field in your API response
          const daysDifference = Math.floor((currentDate - candidateDate) / (1000 * 60 * 60 * 24));
          return daysDifference <= 3 && daysDifference >= 0; // Include today and the previous 3 days
        });
        setCandidates(filteredCandidates);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='mcLower'>
      {/* tables */}
      <div className='leftTable'>

      <div className="scrollableContainer">
        <div className="upperTable">
      <h2 className="text-2xl font-bold mb-4">Recent Applicants</h2>
      <table>
        <thead>
          <tr className='TableHeadings'>
            <th className='tLeft'>Candidates</th>
            <th>Status</th>
            <th>Applied Date</th>
            <th className='tRight'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => (
            <tr key={key}>
              <td className='cand'>
                <StarIcon style={{ color: `${val.star}` }} />
                {/* Add your image and other details here */}
                <img src={img1} alt="" className='tableProfile' />
                <div className='apCont'>
                  <h6 className="applicantsName">{val.InternName}</h6>
                  <h6 className='applicantAdd'>{val.location}</h6>
                </div>
              </td>
              <td>
                {val.status === 'Shortlisted' ? (
                  <button className='statusBtnAcc'>{val.status}</button>
                ) : (
                  <button className='statusBtnPend'>{val.status}</button>
                )}
              </td>
              <td>
                <h5 className='tableDate'>{val.appliedDate}</h5>
              </td>
              <td>
                <div className="tActions">
                  <CheckIcon fontSize='small' className='tbleBtn' />
                  {/* <CancelOutlinedIcon fontSize='small' className='tbleBtn' /> */}
                  <VisibilityOutlinedIcon fontSize='small' className='tbleBtn' />
                  {/* <DeleteIcon id='actDelete' fontSize='small' className='tbleBtn' /> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

    <div className="bottomTable">
      <h2 className="text-2xl font-bold mb-4">Recent Job Listing</h2>
      <table>
        <thead>
          <tr className='TableHeadings'>
            <th className='tLeft'>Title</th>
            <th>Posted By</th>
            <th>Contact No.</th>
            <th className='tRight'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((val, key) => (
            <tr key={key}>
              <td className='cand'>
                <div className='apCont'>
                  <h6 className="applicantsName">{val.job_Title}</h6>
                  <h6 className='applicantAdd'>{val.location}</h6>
                </div>
              </td>
              <td>
                <h6>{val.empEmail}</h6>
              </td>
              <td>
                <h6>{val.empPhone}</h6>
              </td>
              <td>
                <div className="tActions">
                  <VisibilityOutlinedIcon fontSize='small' className='tbleBtn' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>

      <div className='rightList'>
      <h2 className="text-2xl font-bold mb-4">New Candidates</h2>
      <br />

      {candidates.map((candidate, index) => (
        <div key={index} className="listItems">
          <img src={candidate.profile_pic} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">
            {candidate.firstName} {candidate.lastName}
            <p className='roleCont'>
              <p className='role'>{candidate.experience}</p>
            </p>
          </h6>
          {/* You can add your logic here to determine ACCEPT or REJECT button */}
          {/* <button className='applicantsBtnAccepted'>ACCEPT</button> */}
        </div>
      ))}
    </div>

    </div>
  )
}

export default LowerContent
