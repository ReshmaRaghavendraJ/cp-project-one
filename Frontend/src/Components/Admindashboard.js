import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Admindashboard() {
  return (
    <>
      <div className='adminbar'>
      <h1 style={{fontFamily:"revert-layer",fontWeight:"bolder",color:"white",marginTop:"-20px",marginLeft:"-25px"}}>Welcome to Admin Dashboard !</h1>

      <div className="dropdown">
        <h1 className="dropdown-toggle" style={{ fontSize: "23px",color:"white",marginLeft:"30px",fontFamily:"monospace",fontWeight:"normal"}}>Add Details</h1>
        <div className="dropdown-menu">
          <Link to="/Admindashboard/Addcollege" className="dropdown-item" style={{fontFamily:"monospace", fontSize: "19px"}}>Add College</Link>
          <Link to="/Admindashboard/Addcourse" className="dropdown-item" style={{fontFamily:"monospace", fontSize: "19px"}}>Add Course</Link>
          <Link to="/Admindashboard/Addbranch" className="dropdown-item" style={{fontFamily:"monospace", fontSize: "19px"}}>Add Branch</Link>
        </div>
        </div>

        <div className="dropdown">
        <h1 className="dropdown-toggle" style={{ fontSize: "23px",color:"white",marginLeft:"30px",fontFamily:"monospace",fontWeight:"normal"}}>Register</h1>
        <div className="dropdown-menu">
          <Link to="/Admindashboard/Principal" className="dropdown-item" style={{fontFamily:"monospace", fontSize: "19px"}}>Principal</Link>
          <Link to="/Admindashboard/Squad" className="dropdown-item" style={{fontFamily:"monospace", fontSize: "19px"}}>Squad</Link>
        </div>
     </div>

     <Link to="/Admindashboard/Addnews" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-plus fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}}>Add News</span></Link>

     <Link to="/Admindashboard/Viewcomplaints" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-eye fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}} >View Complaints</span></Link>

     <Link to="/Admindashboard/Viewstudents" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-eye fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}} >View Students</span></Link>

    <Link to="/" style={{ textDecoration: 'none',color:"white",marginLeft:"50px"}}>
    <span style={{ fontSize: "24px",fontFamily:"monospace"}} >Logout</span></Link>

    </div>
    <Outlet/>
    </>
  )
}
