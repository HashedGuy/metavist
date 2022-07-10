import React from 'react'
import './roadmap.css'
import '../homePage/home.css'
import RoadmapHero from './roadmapComponents/roadmapHero'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import RmpHero from './roadmapComponents/rmpHero'
import MissionToNonProfits from './roadmapComponents/missionToNonprofits'
import { HashLink } from 'react-router-hash-link'
import {FaRegDotCircle} from 'react-icons/fa'

function Roadmap() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: roadmapRef, inView: roadmapVisible} = useInView({threshold:.5})
  const { ref: mhbRef, inView: mhbVisible} = useInView({threshold:.5})
  return (
    <>
    <div className="App">
      <NavigationMenu defaultActive='roadmap'/>
      <div className="dynamicSection">
      <div className='stickyNavContainer'>
          <HashLink to='#rmpHero' smooth><FaRegDotCircle className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#roadmap' smooth><FaRegDotCircle className={roadmapVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#mhbRef' smooth><FaRegDotCircle className={mhbVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
        </div>
       <div className="pagesContent">
        <RmpHero refG={heroRef}/>
        <RoadmapHero refG={roadmapRef}/>
        <MissionToNonProfits refG={mhbRef} />
       </div>
      </div>
     </div> 
    </>
  )
}

export default Roadmap