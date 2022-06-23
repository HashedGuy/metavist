import { useState } from "react"

function FablesMythsHero() {
    const [activeDot, setActiveDot] = useState('first')
  return (
    <div className="homeHeroSection">
        <h1 className="heroTitle">Fables & Myths</h1>
        <img className="fablesMythsHeroImg"/>
        <div className='slideShowDotsContainer'>
            <div className={activeDot==='first' ? 'slideShowDot activeDot' : 'slideShowDot'} onClick={()=>setActiveDot('first')}></div>
            <div className={activeDot==='second' ? 'slideShowDot activeDot' : 'slideShowDot'} onClick={()=>setActiveDot('second')}></div>
            <div className={activeDot==='third' ? 'slideShowDot activeDot' : 'slideShowDot'} onClick={()=>setActiveDot('third')}></div>
            <div className={activeDot==='fourth' ? 'slideShowDot activeDot' : 'slideShowDot'} onClick={()=>setActiveDot('fourth')}></div>
        </div>
    </div>
  )
}

export default FablesMythsHero