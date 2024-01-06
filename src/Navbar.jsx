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
          <button type="button" onClick={() => {handleNavClick("home"); setMenuOpened(false);}}>Home</button>
          <button type="button" onClick={() => {handleNavClick("residence");setMenuOpened(false);}}>Residence</button>
          <button type="button" onClick={() => {handleNavClick("value");setMenuOpened(false);}}>Value</button>
          <button type="button" onClick={() => {handleNavClick("contact");setMenuOpened(false);}}>Contact</button>
          <button type="button" onClick={() => {handleNavClick("get");setMenuOpened(false);}}>Get Started</button>
        </div>)}
      </div>
    </OutsideClickHandler>
  )
}

export default Navbar