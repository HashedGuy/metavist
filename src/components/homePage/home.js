import React, {useRef, useEffect, useState} from 'react'
import HomeHero from './homeComponents/homeHero'
import './home.css'
import BriefStory from './homeComponents/briefStory'
import Character from './homeComponents/character'
import Problem from './homeComponents/problem'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import {FaRegDotCircle} from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
import '../navigation/nav.css'
import { motion } from 'framer-motion'

function Home() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: bsRef, inView: bsVisible} = useInView({threshold:.5})
  const { ref: charRef, inView: charVisible} = useInView({threshold:.5})
  const { ref: problemRef, inView: problemVisible} = useInView({threshold:.5})
 
  
  return (
    <>
    <motion.div 
      className="App" 
      id='homeId'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0 }}
      >
      <NavigationMenu defaultActive='home'/>
      <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <HashLink to='#homeId' smooth><FaRegDotCircle className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#bsRef' smooth><FaRegDotCircle className={bsVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#charRef' smooth><FaRegDotCircle className={charVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#problemRef' smooth><FaRegDotCircle className={problemVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
        </div>
       <div className="pagesContent">
         <HomeHero refG={heroRef}/>
         <BriefStory refB={bsRef}/>
         <Character refG={charRef}/>
         <Problem refG={problemRef}/>
       </div>
      </div>
     </motion.div>
    </>
  )
}

export default Home