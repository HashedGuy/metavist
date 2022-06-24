import React, {useRef, useEffect, useState} from 'react'
import HomeHero from './homeComponents/homeHero'
import './home.css'
import BriefStory from './homeComponents/briefStory'
import Character from './homeComponents/character'
import Problem from './homeComponents/problem'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import '../navigation/nav.css'

function Home() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: bsRef, inView: bsVisible} = useInView({threshold:.5})
  const { ref: charRef, inView: charVisible} = useInView({threshold:.5})
  const { ref: problemRef, inView: problemVisible} = useInView({threshold:.5})
 
  
  return (
    <>
    <div className="App">
      <NavigationMenu defaultActive='home'/>
      <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <div className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={bsVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={charVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={problemVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
        </div>
       <div className="pagesContent">
         <HomeHero refG={heroRef}/>
         <BriefStory refB={bsRef}/>
         <Character refG={charRef}/>
         <Problem refG={problemRef}/>
       </div>
      </div>
     </div>
    </>
  )
}

export default Home