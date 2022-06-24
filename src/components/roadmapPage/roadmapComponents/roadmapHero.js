import React from 'react'

function RoadmapHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG}>
        <h1 className="heroTitle">Paths of Conquest</h1>
        <div className="roadmapHeroImg">
          <a className='pathItem'>1</a>
          <a className='pathItem2'>2</a>
          <a className='pathItem3'>3</a>
          <a className='pathItem4'>4</a>
          <a className='pathItem5'>5</a>
          <a className='pathItem6'>6</a>
        </div>
    </div>
  )
}

export default RoadmapHero