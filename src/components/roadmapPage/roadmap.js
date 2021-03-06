import React from 'react'
import './roadmap.css'
import '../homePage/home.css'
import RoadmapHero from './roadmapComponents/roadmapHero'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import RmpHero from './roadmapComponents/rmpHero'
import { HashLink } from 'react-router-hash-link'
import {FaRegDotCircle} from 'react-icons/fa'
import { motion } from 'framer-motion'
import Footer from '../homePage/homeComponents/footer'

function Roadmap() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: roadmapRef, inView: roadmapVisible} = useInView({threshold:.5})
  // const { ref: mhbRef, inView: mhbVisible} = useInView({threshold:.5})
  return (
    <>
    <motion.div 
      className="App"
      
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0 }}
      >
      <NavigationMenu defaultActive='roadmap'/>
      <div className="dynamicSection">
      <div className='stickyNavContainer'>
          <HashLink to='#rmpHero' smooth><FaRegDotCircle className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#roadmap' smooth><FaRegDotCircle className={roadmapVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          {/* <HashLink to='#mhbRef' smooth><FaRegDotCircle className={mhbVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink> */}
        </div>
       <div className="pagesContent">
        <RmpHero refG={heroRef}/>
        <RoadmapHero refG={roadmapRef}/>
        <Footer/>
       </div>
      </div>
     </motion.div> 
    </>
  )
}

export default Roadmap