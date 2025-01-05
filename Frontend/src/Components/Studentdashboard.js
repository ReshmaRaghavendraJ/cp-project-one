import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Studentdashboard() {
  return (
 <>
      <div className='adminbar'>
    <h1 style={{fontFamily:"revert-layer",fontWeight:"bolder",color:"white",marginTop:"-20px",marginLeft:"-25px"}}>Welcome to Student Dashboard !</h1>

     <Link to="/Studentdashboard/Postfeedback" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace"}}>Post-Feedback</span></Link>

     <Link to="/Studentdashboard/Postcomplaints" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Post-Complaints</span></Link>

     <Link to="/Studentdashboard/Viewcomp2" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-Complaints</span></Link>
  
     <Link to="/Studentdashboard/Updatestudprofile" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Update-Profile</span></Link>

     <Link to="/Studentdashboard/Updatestudpaswd" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Update-Password</span></Link>

     <Link to="/" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Logout</span></Link>
  </div>
  <Outlet/>
 </>
  )
}
