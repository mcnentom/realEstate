import React, { useState } from 'react'
import {BiSolidDownArrow} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'
import {TiTickOutline} from 'react-icons/ti'
import house1 from './images/house1.jpg'
import './style.css'

const Value = () => {
  
  const [leftIcon1, setLeftIcon1] = useState(<ImCross className='icon' />);
  const [leftIcon2, setLeftIcon2] = useState(<ImCross className='icon' />);
  const [leftIcon3, setLeftIcon3] = useState(<ImCross className='icon' />);
  const [div1Visible, setdiv1Visible] = useState(false);
  const [div2Visible, setdiv2Visible] = useState(false);
  const [div3Visible, setdiv3Visible] = useState(false);
  const togglediv1Visisble= () =>{
    setdiv1Visible(!div1Visible);
    if (div1Visible) {
      // Change the left icon when hiding the <p> tag content
      setLeftIcon1(<ImCross className='icon' />);
    } else {
      // Change the left icon when displaying the <p> tag content
      setLeftIcon1(<TiTickOutline className='icon' />);
    }
  }
  const togglediv2Visisble= () =>{
    setdiv2Visible(!div2Visible);
    if (div2Visible) {
      // Change the left icon when hiding the <p> tag content
      setLeftIcon2(<ImCross className='icon' />);
    } else {
      // Change the left icon when displaying the <p> tag content
      setLeftIcon2(<TiTickOutline className='icon' />);
    }
  }
  const togglediv3Visisble= () =>{
    setdiv3Visible(!div3Visible);
    if (div3Visible) {
      // Change the left icon when hiding the <p> tag content
      setLeftIcon3(<ImCross className='icon' />);
    } else {
      // Change the left icon when displaying the <p> tag content
      setLeftIcon3(<TiTickOutline className='icon' />);
    }
  }
  return (
    <div id='value'>
        <div className='home'>
            <div className='left-h'>
              <div className="image">
                <img src={house1} alt="" />
              </div>
            </div>
            <div className='right-h'>
              <div className='container'>
                    <h2>Our Value</h2>
                    <h4>what we offer suits our value</h4>
                    <div>
                      <h2>{leftIcon1}
                      Best interest rates available <BiSolidDownArrow className='icon' onClick={togglediv1Visisble}/>
                      </h2>
                      {div1Visible && (<p>Exercitation in fugiat est ut ad ea cupidatat 
                          ut in cupidatat occaecat ut occaecat consequat est
                          minim minim esse tempor laborum consequat esse adipisicing 
                          eu reprehenderit enim.
                      </p>
                      )}
                    </div>
                    <div>
                    <h2>{leftIcon2}
                      Best stable prices <BiSolidDownArrow className='icon' onClick={togglediv2Visisble}/>
                      </h2>
                      {div2Visible && (<p>Exercitation in fugiat est ut ad ea cupidatat 
                          ut in cupidatat occaecat ut occaecat consequat est
                          minim minim esse tempor laborum consequat esse adipisicing 
                          eu reprehenderit enim.
                      </p>
                      )}
                    </div>
                    <div>
                    <h2>{leftIcon3}
                      Best prices available <BiSolidDownArrow className='icon' onClick={togglediv3Visisble}/>
                      </h2>
                      {div3Visible && (<p>Exercitation in fugiat est ut ad ea cupidatat 
                          ut in cupidatat occaecat ut occaecat consequat est
                          minim minim esse tempor laborum consequat esse adipisicing 
                          eu reprehenderit enim.
                      </p>
                      )}
                    </div>
              </div>
            </div>
        </div>
    </div>
    
  )
}

export default Value