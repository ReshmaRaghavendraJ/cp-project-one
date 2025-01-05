import React from 'react'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';



export default function Addnews()
 {
    const[news,setNews]=useState('');

    function Addnews()    /* To Add News Form */
{
  if(news==="")
    {
      toast.error("please enter news");
      return;
    }
  const obj={news};
    axios
    .post("http://localhost:8080/Addnews",obj)
    .then((res)=>{
      toast.success(res.data);
      clearAll();
    })
    .catch((err)=>{
      toast.error(err.responsse.data);
    });
}

function clearAll()
{
    setNews('');
}


  return (
   <>

    <Card className='newscard'>
<h3 style={{color:"orange",fontFamily:"monospace",marginLeft:"300px",marginTop:"50px",fontWeight:"bold"}}>Post News</h3>
<label className='form-label'>Post News:</label> <br></br>
<input type="text" value={news} className='form-control' onChange={(e) => setNews(e.target.value)} style={{width:"800px",height:"40px",marginLeft:"20px"}}/><br></br>
 <div className='btnss'>
   <button type="button" className='btn btn-primary me-4' onClick={Addnews}>Submit</button>
   </div>
    </Card>
   </>
  )
}
