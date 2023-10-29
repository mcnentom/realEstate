import React from 'react'
import house from './images/House5.jpg';
import './style.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
       <div className='left-h'>
            <h2>Our Contacts</h2>
            <h4>Contact us on</h4>
            <p>We are always ready to help you by providing best services for you.We 
               believe a good place to live can make your life better
            </p>
            <div className="contact-items">
                <div>
                    <h4>Call</h4>
                    <p>02112314514</p>
                    <button>call now</button>
                </div>
                <div>
                    <h4>Chat us</h4>
                    <p>02112314514</p>
                    <button>chat now</button>
                </div>
                <div>
                    <h4>Video Call</h4>
                    <p>02112314514</p>
                    <button>Video call now</button>
                </div>
                <div>
                    <h4>Message</h4>
                    <p>02112314514</p>
                    <button>Message now</button>
                </div>
            </div>
        </div>
        <div className="right-h">
            <div className="image2">
                <img src={house} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact