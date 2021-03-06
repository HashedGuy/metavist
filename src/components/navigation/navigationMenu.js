import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link} from "react-router-dom";
import {RiMenu2Line, RiRoadMapFill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {GiBattleGear, GiHamburgerMenu} from 'react-icons/gi'
import {FaTiktok} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {MdMenu} from 'react-icons/md'
import {CgGhostCharacter} from 'react-icons/cg'
import Opensea from '../../assets/img/opensea.png'

import Logo from '../../assets/img/logo.png'
import { HashLink } from 'react-router-hash-link';
import { icons } from 'react-icons';

function NavigationMenu(props) {
  const [activeLink, setActiveLink] = useState(props.defaultActive)
  const [scrolled, setScrolled] = useState(false);
  const [icon, setIcon] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('')

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
      console.log(windowHeight)
    } 
  };
 

  let lastScrollTop = 0;

useEffect(()=> {
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
      // downscroll code
      setScrollDirection('down')
    } else {
      // upscroll code
      setScrollDirection('up')
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
}, [])


  return (
    <>
    {scrollDirection==='down' || !scrolled? 
    <div 
      className={scrolled ? 'navContainer scrolledNav':'navContainer'} 
      >
      <div className='logoContainer'>
        <Link to={'/'} onClick={()=>setActiveLink('home')}>
          <img src={Logo} className={scrolled ? 'logoImg hideMenu' : 'logoImg'}/>
          
        </Link>
        {scrolled ? 
          <div className='socialmediaBox'>
            <a href='https://www.tiktok.com/' target='_blank'><FaTiktok className='socialmediaIcons tiktok' title='TikTok'/></a> 
            <a href='https://twitter.com/' target='_blank'><BsTwitter className='socialmediaIcons twitter' title='Twitter'/></a>
            <a href='https://opensea.io/' target='_blank'>
              <img 
                src={icon ? 'https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg' : 'https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.svg'} 
                className={icon ? 'socialmediaIcons opensea' : 'socialmediaIcons'}
                onMouseEnter={()=>setIcon(true)} 
                onMouseOut={()=>setIcon(false)}
                title='Opensea'/>
            </a>
          </div>
           : ''}
      
      </div>

      <div className='menuSection'>
        <ul className='ulMenu'>
          <li className={activeLink==='home' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/'} onClick={()=>setActiveLink('home')}>Home</Link></li>
          <li className={activeLink==='battleCry' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/battlecry'} onClick={()=>setActiveLink('battleCry')}>Battle Cry</Link></li>
          <li className={activeLink==='fablesMyths' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')}>Fables & Myths</Link></li>
          <li className={activeLink==='roadmap' ? 'activeMenuItem' : ''}><Link className='navLink' to={'/roadmap'} onClick={()=>setActiveLink('roadmap')}>Roadmap</Link></li>
        </ul>
      </div>
    </div> : ''}
    <div className={scrollDirection==='down' ? 'bottomMenu hideMenu' : 'bottomMenu'}>
      <HashLink to={'/'} onClick={()=>setActiveLink('home')} className={activeLink==='home' ? 'bottomMenuItems activeBottomMenuItem': 'bottomMenuItems'}>
        <div >
        <AiFillHome/>
        <p className='bottomMenuText'>Home</p>
      </div></HashLink>

      <HashLink to={'/battlecry'} onClick={()=>setActiveLink('battleCry')} className={activeLink==='battleCry' ? 'bottomMenuItems activeBottomMenuItem': 'bottomMenuItems'}>
      <div  >
        <GiBattleGear/>
        <p className='bottomMenuText'>BattleCry</p>
      </div></HashLink>
      
      <HashLink to={'/fablesMyths'} onClick={()=>setActiveLink('fablesMyths')} className={activeLink==='fablesMyths' ? 'bottomMenuItems activeBottomMenuItem': 'bottomMenuItems'}>
        <div >
          <CgGhostCharacter/>
          <p className='bottomMenuText'>F&M</p>
        </div></HashLink>

      <HashLink to={'/roadmap'} onClick={()=>setActiveLink('roadmap')} className={activeLink==='roadmap' ? 'bottomMenuItems activeBottomMenuItem': 'bottomMenuItems'}>
        <div>
          <RiRoadMapFill/>
          <p className='bottomMenuText'>Roadmap</p>
        </div></HashLink>

      
        <div onClick={()=>setActiveLink('hamburger')} className={activeLink==='hamburger' ? 'bottomMenuItems activeBottomMenuItem': 'bottomMenuItems'}>
          <MdMenu/>
          <p className='bottomMenuText'>More...</p>
        </div>
        
    </div>
    </>
  )
}

export default NavigationMenu