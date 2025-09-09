import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


function Blog() {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-5 shadow-lg p-5 mb-5 bg-body-tertiary rounded">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/20298291/pexels-photo-20298291.png?_gl=1*1azj0uk*_ga*OTY1NzQ4NDMzLjE3MjY0ODU1ODU.*_ga_8JE65Q40S6*czE3NTcxODEzODEkbzMwJGcxJHQxNzU3MTg0NzIyJGo1OSRsMCRoMA.." class="card-img-top img-fluid " alt="Skyscrapers"/>
      <div class="card-body">
        <h2 class="card-title ">Price  10,999/-</h2>
        <span class="icon fs-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
        <p class="card-text fw-bold">In workplaces where heavy materials and equipment are handled, there is always a risk of objects falling on your feet. Safety shoes withsteel or composite toe capsprovide a strong barrier, minimizing the impact and preventing serious injuries such as fractures or crush injuries.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/20350010/pexels-photo-20350010.jpeg?_gl=1*14vrs5y*_ga*OTY1NzQ4NDMzLjE3MjY0ODU1ODU.*_ga_8JE65Q40S6*czE3NTcxODEzODEkbzMwJGcxJHQxNzU3MTg0Nzc5JGoyJGwwJGgw" class="card-img-top img-fluid" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h2 class="card-title">Price 13,999/-</h2>
         <span class="icon fs-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
       <p class="card-text fw-bold">In workplaces where heavy materials and equipment are handled, there is always a risk of objects falling on your feet. Safety shoes withsteel or composite toe capsprovide a strong barrier, minimizing the impact and preventing serious injuries such as fractures or crush injuries.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.pexels.com/photos/5710076/pexels-photo-5710076.jpeg?_gl=1*1y9v54o*_ga*OTY1NzQ4NDMzLjE3MjY0ODU1ODU.*_ga_8JE65Q40S6*czE3NTcxODEzODEkbzMwJGcxJHQxNzU3MTg1NTkzJGoxNSRsMCRoMA.." class="card-img-top img-fluid" alt="Palm Springs Road"/>
      <div class="card-body">
        <h2 class="card-title">Price  18,999/-</h2>
         <span class="icon fs-3"><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
        <p class="card-text fw-bold">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Blog