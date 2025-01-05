import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar()
 {

  return (
    <>
    <div className='abt'>
    <div className='menubar'>
    <h1 style={{fontFamily:"revert-layer",fontWeight:"bolder",color:"lightpink",marginTop:"-40px",marginLeft:"-25px"}}><span className="highlight1">A</span>NTI-<span className="highlight1">R</span>agging Committee</h1>
   
    <Link to="/" style={{ textDecoration: 'none',color:"white"}}>
    <i className="fas fa-home fa-lg" style={{ marginRight: "10px",color:"white"}}></i>
    <span style={{ fontSize: "24px",color:"white",fontFamily:"monospace"}}>Home</span></Link>


     <Link to="/Studreg" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-user-plus fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}}>Register-Student</span></Link>

     <Link to="/Login" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-sign-in-alt fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}}>Login</span></Link>

     <Link to="/About" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-info-circle fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}}>About</span></Link>

     <Link to="/Contact" style={{ textDecoration: 'none',color:"white"}}>
     <i className="fas fa-phone fa-lg" style={{ marginRight: "10px",marginLeft:"50px"}}></i>
     <span style={{ fontSize: "24px",fontFamily:"monospace"}}>Contact</span></Link>
      </div>
      </div>
    </>
  )
}
