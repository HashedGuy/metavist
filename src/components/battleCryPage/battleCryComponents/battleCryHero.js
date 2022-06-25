import React from 'react'

function BattleCryHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='heroRef'>
        <h1 className="heroTitle">Battle Cry</h1>
        <img className="heroImg"/>
    </div>
  )
}

export default BattleCryHero