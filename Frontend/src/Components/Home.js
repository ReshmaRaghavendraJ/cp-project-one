import React from 'react'
import './Styles.css'
import Navbar from './Navbar'


export default function Home()
 {
  return (
    <>
  <Navbar/>

      <div className='div-images'>
        <img src="https://www.marwadiuniversity.ac.in/wp-content/uploads/2022/04/Vector-Smart-Object-1.png" alt="rag1" height="430px" width="430px"/>
        <img src="https://www.antiragging.in/assets/img/index/being-ragged.webp" alt="rag2" height="450px" />
        <img src="https://www.marwadiuniversity.ac.in/wp-content/uploads/2022/04/award-trophy-.png" alt="rag3" width="460px" height="400px"/>
      </div>
      <div className='stop-rag'>
        <img src="https://pragativadi.com/core/uploads/2022/08/Say-No-To-Ragging.jpg" alt="rag4" style={{marginLeft:"300px"}}/><br></br>
      <h3 style={{color:"maroon",fontWeight:"bold",fontFamily:"cursive",textDecoration:"underline"}} className='text-center'>ANTI-RAGGING</h3>
        <h5 style={{fontFamily:"monospace",margin:"10px"}}><span className="highlight">R</span>agging is a disturbing reality in the higher education system of our country.
Despite the fact that over the years ragging has claimed hundreds of innocent lives and has ruined careers of thousands of bright students, the practice is still perceived by many as a way of familiarization and an initiation into the real world for young college-going students.
Other organisations/bodies working in this field have also attempted to define ragging, the variety of definitions being reflective of differences in perspective.</h5>
      </div>
    </>
  )
}
