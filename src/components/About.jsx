import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

function About() {
  return (
   <>
   <div className="cantainer-fliud m-5 shadow-lg p-4 mb-4 bg-body-tertiary rounded">
    <div class="row">
      <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-3">
        <img src="https://images.pexels.com/photos/18946645/pexels-photo-18946645.jpeg?_gl=1*1lqa706*_ga*OTY1NzQ4NDMzLjE3MjY0ODU1ODU.*_ga_8JE65Q40S6*czE3NTcxODEzODEkbzMwJGcxJHQxNzU3MTg3MTg2JGo1OSRsMCRoMA.." class="img-fluid rounded-4 " alt="" />
      </div>
      <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-3 d-flex flex-column justify-content-center aligen-items-center">
        <h1 class="fs-bold ">Nike S238</h1>
        <h3 class="card-title ">Price 10,999/-</h3>
        <span class="icon fs-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
        <p>The right footwear can prevent injuries, improve circulation, alleviate pain, and support your body for better movement. As the foundation for your entire body, there's a whole lot to your health that begins in your feet. That's part of the reason why shoes are so important for your health.</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default About