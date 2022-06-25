import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link} from "react-router-dom";
import {RiMenu2Line} from 'react-icons/ri'

function NavigationMenu(props) {
  const [activeLink, setActiveLink] = useState(props.defaultActive)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setScrolled(true) : setScrolled(false);
    }
  };

  return (
    <div className={scrolled ? 'navContainer scrolledNav':'navContainer'} >
      <div className='logoContainer'>
        <Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}><h2>Metavists</h2></Link>
      </div>

      <div className='menuSection'>
        <RiMenu2Line className='dropdownMenu'/>
        <ul className='ulMenu'>
          <li className={activeLink==='home' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}>Home</Link></li>
          <li className={activeLink==='battleCry' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}>Battle Cry</Link></li>
          <li className={activeLink==='fablesMyths' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}>Fables & Myths</Link></li>
          <li className={activeLink==='roadmap' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}>Roadmap</Link></li>
        </ul>
        {/* <a className='languageBox'><CircleFlag countryCode="us" height="20" className='flagIcon'/>English US <BsChevronDown className='downIcon'/></a> */}
      </div>
    </div>
  )
}

export default NavigationMenu