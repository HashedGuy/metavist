import React from 'react'

function BattleCryHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG}>
        <h1 className="heroTitle">Battle Cry</h1>
        <img className="heroImg"/>
    </div>
  )
}

export default BattleCryHero