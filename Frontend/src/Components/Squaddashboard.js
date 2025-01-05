import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Squaddashboard() 
{

  return (
    <>
      <div className='adminbar'>
    <h1 style={{fontFamily:"revert-layer",fontWeight:"bolder",color:"white",marginTop:"-20px",marginLeft:"-25px"}}>Welcome to Squads Dashboard !</h1>

     <Link to="/Squaddashboard/ViewNews1" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>View-News</span></Link>

     <Link to="/Squaddashboard/Viewcomp1" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}} >View-Complaints</span></Link>

     <Link to="/Squaddashboard/Viewstud1" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}} >View-Students</span></Link>

     <Link to="/Squaddashboard/Managecomp" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}} >Manage-Complaints</span></Link>
 
     <Link to="/Squaddashboard/UpdateSquadProfile" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}} >Update-Profile</span></Link>

     <Link to="/Squaddashboard/UpdateSquadPaswd" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}} >Update-Password</span></Link>

     <Link to="/" style={{ textDecoration: 'none',color:"white"}}>
     <span style={{ fontSize: "20px",fontFamily:"monospace",marginLeft:"20px"}}>Logout</span></Link>
    </div>
    <Outlet/>
    </>
  )
}
