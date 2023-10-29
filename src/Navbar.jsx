import React, { useState } from "react"
import {HiMenu} from 'react-icons/hi';
import './style.css'
import OutsideClickHandler from 'react-outside-click-handler';
// import {Link} from 'react-scroll';

const Navbar = ({ handleNavClick }) => {
  const mobile = window.innerWidth <= 600 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <OutsideClickHandler
    onOutsideClick={()=>{
      setMenuOpened(false);
    }}
    >
      <div className='navigation' >
        {menuOpened=== false && mobile === true ?(<div className="menu-icon" onClick={()=>setMenuOpened(true)}>
          <HiMenu size={30}/></div>):( 
        <div className="links">
          <a href="#" onClick={() => {handleNavClick("home"); setMenuOpened(false);}}>Home</a>
          <a href="#" onClick={() => {handleNavClick("residence");setMenuOpened(false);}}>Residence</a>
          <a href="#" onClick={() => {handleNavClick("value");setMenuOpened(false);}}>Value</a>
          <a href="#" onClick={() => {handleNavClick("contact");setMenuOpened(false);}}>Contact</a>
          <a href="#" onClick={() => {handleNavClick("get");setMenuOpened(false);}}>Get Started</a>
        </div>)}
      </div>
    </OutsideClickHandler>
  )
}

export default Navbar