import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link} from "react-router-dom";
import {RiMenu2Line, RiRoadMapFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {GiBattleGear} from 'react-icons/gi'
import {CgGhostCharacter} from 'react-icons/cg'

import Logo from '../../assets/img/logo.png'

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
    <div className={scrolled ? 'navContainer scrolledNav':'navContainer'} style={props.defaultActive==='fablesMyths' ? {position:'sticky', background:'rgba(158, 85, 252, .1)'} : {}}>
      <div className='logoContainer'>
        <Link to={'/'} onClick={()=>setActiveLink('home')}><img src={Logo} className='logoImg'/></Link>
      </div>

      <div className={dropdownMenu ? 'menuSection openedMenuSection' : 'menuSection'}>
        <RiMenu2Line className={dropdownMenu ? 'dropdownMenu openedDropdownMenu' : 'dropdownMenu'} onClick={()=>setDropdownMenu(!dropdownMenu)}/>
        {dropdownMenu ? 
          <ul className='ulDropdown'>
            <li className={activeLink==='home' ? 'activeDropdownMenuItem' : ''}>
              <Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}>
                <AiFillHome/>
                <p className='dropdownText'>Home</p>
              </Link>
            </li>
            <li className={activeLink==='battleCry' ? 'activeDropdownMenuItem' : ''}>
              <Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}>
                <GiBattleGear/>
                <p className='dropdownText'>BattleCry</p>
              </Link>
            </li>
            <li className={activeLink==='fablesMyths' ? 'activeDropdownMenuItem' : ''}>
              <Link className='navLink' to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}>
                <CgGhostCharacter/>
                <p className='dropdownText'>Character</p>
              </Link>
            </li>
            <li className={activeLink==='roadmap' ? 'activeDropdownMenuItem' : ''}>
              <Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}>
                <RiRoadMapFill/>
                <p className='dropdownText'>Roadmap</p>
              </Link>
            </li>
          </ul> : ''}
        <ul className='ulMenu'>
          <li className={activeLink==='home' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}>Home</Link></li>
          <li className={activeLink==='battleCry' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}>Battle Cry</Link></li>
          <li className={activeLink==='fablesMyths' ? 'activeMenuItem white' : ''}><Link className='navLink' style={props.defaultActive==='fablesMyths' ? {color:'#9E55FC'}:{}} to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}>Fables & Myths</Link></li>
          <li className={activeLink==='roadmap' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}>Roadmap</Link></li>
          {/* <li className={activeLink==='story' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/story'} onClick={()=>setActiveLink('story')}>Story</Link></li> */}
        </ul>
        {/* <a className='languageBox'><CircleFlag countryCode="us" height="20" className='flagIcon'/>English US <BsChevronDown className='downIcon'/></a> */}
      </div>
    </div>
  )
}

export default NavigationMenu