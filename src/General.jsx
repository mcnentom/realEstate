import React from 'react'
import './style.css'
import { AiTwotoneHome } from 'react-icons/ai'
import  { MdLocationOn } from 'react-icons/md'
import heroimage from './images/hero-image.png';

const General = () => {
  
  return (
    <div className='general'>
      <div className='home' id='home'>
        <div className="left-h">
          <h1> <AiTwotoneHome className='icon'/> REAL ESTATE</h1>
          <h3>Discover your home and find out the most exciting offers</h3>
          <p>Find a variety of properties that suite your preferences and taste</p>
          <div className="search-bar">
            <span><MdLocationOn className='icon'/> <input type="text" /><button>search</button></span>
            </div>
        </div>
        <div className="right-h">
          <div className="image">
           <img src={heroimage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default General