import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';

export default function Viewcomp2() 
{
  const urid=sessionStorage.getItem('userid');  //session storage getting of studentid
  const [complaintsList, setComplaintsList] = useState([]); // To store the list of complaints

  useEffect(()=>{
    Getcomplaints();
  },[])

  function Getcomplaints()     /* View Complaints */
{
  axios
  .get(`http://localhost:8080/Getcomplaints/${urid}`)
  .then((res)=>{
    setComplaintsList(res.data);
  })
  .catch((err)=>{
    toast.error(err.response.data);
  });
}


  return (
    <>
<div className='viewcomp2card'>
   <h3 style={{ color: 'violet', fontFamily: 'monospace',fontWeight:"bold",textAlign:"center"}}>Complaints List</h3>
   <table className='table table-striped'>
  <thead>
    <tr>
      <th>Complaint id</th>
      <th>Victim's Name</th>
      <th>Complaint Category</th>
      <th>Student id</th>
      <th>Accused Person</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
      {
        complaintsList.map((item, index) => (
          <tr key={index}>
            <td>{item.complaintid}</td>
         <td>{item.victimsname}</td>
        <td>{item.complaintcategory}</td>
        <td>{item.student.studentid}</td>
        <td>{item.accusedperson}</td>
        <td>{item.status}</td>
          </tr>
          ))
      }
    </tbody>
    </table>
    </div>
</>
  )
}
