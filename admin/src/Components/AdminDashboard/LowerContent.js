import React from 'react'
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

  const data = [
    { star: '#ff9900', name: "Jane Cooper", add: "Lahore,PK", status: "Approved", date: "08/25/2023" },
    { star: '#c9c9c9', name: "Jane Cooper", add: "Lahore,PK", status: "Pending", date: "08/25/2023" },
    { star: '#ff9900', name: "Jane Cooper", add: "Lahore,PK", status: "Approved", date: "08/25/2023" },
  ]
  const data2 = [
    { name: "ROR Developer", add: "Lahore,PK", app: '4+ Applied', status: "Active" },
    { name: "ROR Developer", add: "Lahore,PK", app: '4+ Applied', status: "Active" }
  ]

  return (
    <div className='mcLower'>
      {/* tables */}
      <div className='leftTable'>
        <div className="upperTable">
        <h2 className="text-2xl font-bold mb-4">Recent Applicants</h2>
          <table>
            <tr className='TableHeadings'>
              <th className='tLeft'>Candidates</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th className='tRight'>Action</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className='cand' >
                    <StarIcon clas style={{ color: `${val.star}` }} />
                    <img src={img1} alt="" className='tableProfile' />
                    <div className='apCont'>
                      <h6 className="applicantsName">{val.name} </h6>
                      <h6 className='applicantAdd' >{val.add}</h6>
                    </div>
                  </td>
                  <td>
                    {val.status === 'Approved' ? (<button className='statusBtnAcc'>{val.status}</button>) : (<button className='statusBtnPend'>{val.status}</button>)}

                  </td>
                  <td>
                    <h5 className='tableDate'>
                      {val.date}
                    </h5>
                  </td>
                  <td>
                    <div className="tActions">
                      <CheckIcon fontSize='small' className='tbleBtn' />
                      <CancelOutlinedIcon fontSize='small' className='tbleBtn' />
                      <VisibilityOutlinedIcon fontSize='small' className='tbleBtn' />
                      <DeleteIcon id='actDelete' fontSize='small' className='tbleBtn' sty />
                    </div>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>

        <div className="bottomTable">
        <h2 className="text-2xl font-bold mb-4">Recent Job Listing</h2>
          <table>
            <tr className='TableHeadings'>
              <th className='tLeft'>Title</th>
              <th>Applications</th>
              <th>Status</th>
              <th className='tRight'>Action</th>
            </tr>
            {data2.map((val, key) => {
              return (
                <tr key={key}>
                  <td className='cand' >
                    <div className='apCont'>
                      <h6 className="applicantsName">{val.name} </h6>
                      <h6 className='applicantAdd' >{val.add}</h6>
                    </div>
                  </td>

                  <td>
                    <h5 className='tableApplication'>
                      {val.app}
                    </h5>
                  </td>
                  <td>
                    <button className='statusBtnAcc'>{val.status}</button>
                  </td>
                  <td>
                    <div className="tActions">
                      <VisibilityOutlinedIcon fontSize='small' className='tbleBtn' />
                      <EditIcon fontSize='small' className='tbleBtn' />
                      <DeleteIcon id='actDelete' fontSize='small' className='tbleBtn' sty />
                    </div>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>

      {/* right List */}
      <div className='rightList'>

      <h2 className="text-2xl font-bold mb-4">Applicant Review</h2>
        <br />

        <div className="listItems">
          <img src={img1} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnAccepted'>ACCEPT</button>
        </div>
        <div className="listItems">
          <img src={img2} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnRejected'>REJECT</button>
        </div>
        <div className="listItems">
          <img src={img3} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnRejected'>REJECT</button>
        </div>
        <div className="listItems">
          <img src={img4} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnAccepted'>ACCEPT</button>
        </div>
        <div className="listItems">
          <img src={img5} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnAccepted'>ACCEPT</button>
        </div>
        <div className="listItems">
          <img src={img6} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnAccepted'>ACCEPT</button>
        </div>
        <div className="listItems">
          <img src={img7} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnRejected'>REJECT</button>
        </div>
        <div className="listItems">
          <img src={img8} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnAccepted'>ACCEPT</button>
        </div>
        <div className="listItems">
          <img src={img9} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnRejected'>REJECT</button>
        </div>
        <div className="listItems">
          <img src={img10} alt="" className='applicantsProfile' />
          <h6 className="applicantsName">Jone Cooper <p className='roleCont'><p className='role'>UI Designer</p> - 8 Yrs Exp</p> </h6>
          <button className='applicantsBtnRejected'>REJECT</button>
        </div>
      </div>

    </div>
  )
}

export default LowerContent
