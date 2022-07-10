import React from 'react'
import bcHero from '../../../assets/img/bcHero.png'

function RmpHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='rmpHero'>
        <h1 className="heroTitle">Roadmap</h1>
        <img src={bcHero} className="heroImg"/>
        <div className='roadmapTextSection'>
            <p className='briefStoryText' style={{textAlign: 'center'}}>We have high ambition for what we hope to accomplish.  Ambition we will meet through a series of roadmaps, milestones and utility. Below you will see our holder benefits for Metavists and get a glimpse at the change we have been seeking. Making sure that we leave the planet in a better place. In joining the Metavists, you are making a difference that will be felt by others. You will see the impact your money has on the future. This is our chance to bring the world of nonprofit to a higher plane and set the foundation of evolution.</p>
        </div>
      
    </div>  
  )
}

export default RmpHero