import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Principaldashboard()
 {

  return (
  <>
      <div className='adminbar'>
    <h1 style={{fontFamily:"revert-layer",fontWeight:"bolder",color:"white",marginTop:"-20px",marginLeft:"-25px"}}>Welcome to Principal Dashboard !</h1>

     <Link to="/Principaldashboard/Managestudent" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace"}}>Manage-Students</span></Link>

     <Link to="/Principaldashboard/Viewnews" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-News</span></Link>

     <Link to="/Principaldashboard/Viewcomp" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-Complaints</span></Link>

     <Link to="/Principaldashboard/ViewFeedback" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-Feedback</span></Link>

     <Link to="/Principaldashboard/Viewstud" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-Students</span></Link>

     <Link to="/Principaldashboard/UpdatePrinProfile" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Update-Profile</span></Link>

     <Link to="/Principaldashboard/UpdatePrinpswd" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Update-Password</span></Link>

     <Link to="/" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Logout</span></Link>
     </div>
     <Outlet/>
  </>
  )
}
