import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default function Addbranch()
 {
    const[branchname,setBranchname]=useState('');
    const[collegelist,setCollegelist]=useState([ ]);    //Dropdown list for college names
    const[selectcollege,setSelectcollege]=useState('');
    const[courselist,setCourselist]=useState([]);   //Dropdown list for Course names
    const[selectcourse,setSelectcourse]=useState('');
    const[branchlist,setBranchlist]=useState([]);   //Display  all Branch list
    const[hideform,setHideform]=useState(false);

    useEffect(()=>{
      Getallcollegedetails();   //Drop down College
      Getallcoursedetails();    //Drop down Course
    },[])

   function Getallcollegedetails()           /* Drop down list for all College Details */
    {
      axios
      .get("http://localhost:8080/Getallcollegedetails")
      .then((res)=>{
        setCollegelist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function Getallcoursedetails()           /* Drop down list for all Course Details */
    {
      axios
      .get("http://localhost:8080/Getallcoursedetails")
      .then((res)=>{
        setCourselist(res.data);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function Addbranchdetails()          /* Add Branch Details */
    {
      if(selectcollege==="")
        {
          toast.error("please select the college");
          return;
        }
        if(selectcourse==="")
          {
            toast.error("please select the course");
            return;
          }
        if(branchname==="")
          {
            toast.error("please enter branch");
            return;
          }
      const obj={branchname};
        axios
        .post(`http://localhost:8080/Addbranchdetails/${selectcollege}/${selectcourse}`,obj)
        .then((res)=>{
          toast.success(res.data);
          setHideform(false);
        clearAll();
        })
        .catch((err)=>{
          toast.error(err.response.data);
        })
    }

    function Getallbranchdetails()           /* Display all Branch Details */
    {
      axios
      .get("http://localhost:8080/Getallbranchdetails")
      .then((res)=>{
        setBranchlist(res.data);
        setHideform(true);
      })
      .catch((err)=>{
        toast.error(err.response.data);
      });
    }

    function clearAll()
    {
      setBranchname('');
      setSelectcollege('');
      setSelectcourse('');
    }

  return (
    <>

    <Card className='collegedetails'>
    <h3 style={{color:"green",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Add Branch</h3> 

<label className='form-label'>Choose College:</label>
    <select className="form-select" value={selectcollege} onChange={(e)=>setSelectcollege(e.target.value)} style={{ width: '800px',marginLeft:"25px"}}>
    <option value={0}>--Select College--</option>
    {
      collegelist.map((item,index)=>(
        <option key={index} value={item.collegeid}>{item.collegeid}-{item.collegename}</option>
      ))
    }
    </select>

    <label className='form-label'>Choose Course:</label>
    <select className="form-select" value={selectcourse} onChange={(e)=>setSelectcourse(e.target.value)} style={{ width: '800px',marginLeft:"25px"}}>
    <option value={0}>--Select Course--</option>
    {
      courselist.map((item,index)=>(
        <option key={index} value={item.courseid}>{item.courseid}-{item.coursename}</option>
      ))
    }
    </select>

          <label className='form-label'>Enter Branch Name:</label>
          <input type='text' className='form-control' value={branchname} onChange={(e)=>setBranchname(e.target.value)} style={{ width: '800px'}}/><br></br>
          <div className='btnss'>
      <button type="button" className='btn btn-success me-4' onClick={Getallbranchdetails} >Show</button>
        <button type="button" className='btn btn-primary mb -3' onClick={Addbranchdetails} >Submit</button><br></br>
        </div><br></br>
        </Card><br></br>
      

       {hideform && (
      <div className='displaydetails'>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Branchid</th>
          <th>Branch Name</th>
          <th>College Name</th>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {
          branchlist.map((item,index)=>(
            <tr key={index}>
              <td>{item.branchid}</td>
              <td>{item.branchname}</td>
              <td>{item.college1.collegename}</td>
              <td>{item.course.coursename}</td>
            </tr>
          ))
        }
      </tbody>
      </table>
      </div>
      )} 
        </>
        )
    } 
 

