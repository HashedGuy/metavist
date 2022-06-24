import React, { useState } from 'react'
import './nav.css'
import { CircleFlag } from 'react-circle-flags'
import {BsChevronDown} from 'react-icons/bs'
import { Link, Outlet } from "react-router-dom";

function NavigationMenu(props) {
  const [activeLink, setActiveLink] = useState(props.defaultActive)
  return (
    <div className='navContainer'>
      <div className='logoContainer'>
        <Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}><h2>Metavista</h2></Link>
      </div>

      <div className='menuSection'>
        <ul>
          <li className={activeLink==='home' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}>Home</Link></li>
          <li className={activeLink==='battleCry' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}>Battle Cry</Link></li>
          <li className={activeLink==='fablesMyths' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}>Fables & Myths</Link></li>
          <li className={activeLink==='roadmap' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}>Roadmap</Link></li>
        </ul>
        <a className='languageBox'><CircleFlag countryCode="us" height="20" className='flagIcon'/>English US <BsChevronDown className='downIcon'/></a>
      </div>
    </div>
  )
}

export default NavigationMenu