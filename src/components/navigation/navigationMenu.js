import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link} from "react-router-dom";
import {RiMenu2Line, RiRoadMapFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {GiBattleGear} from 'react-icons/gi'
import {CgGhostCharacter} from 'react-icons/cg'

function NavigationMenu(props) {
  const [activeLink, setActiveLink] = useState(props.defaultActive)
  const [scrolled, setScrolled] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false)

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
        <RiMenu2Line className='dropdownMenu' onClick={()=>setDropdownMenu(!dropdownMenu)}/>
        {dropdownMenu ? 
          <ul className='ulDropdown'>
            <li className={activeLink==='home' ? 'activeDropdownMenuItem' : ''}><Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}><AiFillHome/></Link></li>
            <li className={activeLink==='battleCry' ? 'activeDropdownMenuItem' : ''}><Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}><GiBattleGear/></Link></li>
            <li className={activeLink==='fablesMyths' ? 'activeDropdownMenuItem' : ''}><Link className='navLink' to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}><CgGhostCharacter/></Link></li>
            <li className={activeLink==='roadmap' ? 'activeDropdownMenuItem' : ''}><Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}><RiRoadMapFill/></Link></li>
          </ul> : ''}
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