import React from 'react'
import './roadmap.css'
import '../homePage/home.css'
import RoadmapHero from './roadmapComponents/roadmapHero'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import BriefStory from '../homePage/homeComponents/briefStory'

function Roadmap() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: unkRef, inView: unkVisible} = useInView({threshold:.5})
  return (
    <>
    <div className="App">
      <NavigationMenu defaultActive='roadmap'/>
      <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <div className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={unkVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
        </div>
       <div className="pagesContent rmp">
        <RoadmapHero refG={heroRef}/>
       </div>
      </div>
     </div> 
    </>
  )
}

export default Roadmap