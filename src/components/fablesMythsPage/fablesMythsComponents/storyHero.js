import React, {useState} from 'react'
import Mountain from '../../../assets/img/mntn.png'
import Tree from '../../../assets/img/tr.png'
import MainGuy from '../../../assets/img/mainGuy.png'
import Friends from '../../../assets/img/friends.png'
import FablesMythsHero from './fablesMythsHero'
import Stories from './stories'

import { useInView } from 'react-intersection-observer';
import NavigationMenu from '../../navigation/navigationMenu'
import { HashLink } from 'react-router-hash-link'
import {FaRegDotCircle} from 'react-icons/fa'

function StoryHero() {
  const [activeChar, setActiveChar] = useState('mainGuy')
  const { ref: backgroundStoryRef, inView: heroVisible} = useInView({threshold:.1})
  const { ref: strRef, inView: strVisible} = useInView({threshold:.1})
  return (
      <>
       <div className="AppG">
              <>
              <NavigationMenu defaultActive='fablesMyths'/>
              <div>

              </div>
              <div className="storyHero" id='backgroundStoryRef'>
               
                <img src={Mountain} className="background" alt='' ref={backgroundStoryRef} />
                <img src={Tree} className="foreground" alt=''/>
                <h1 className="storyBTitle">Metavist story</h1>
                </div>
              </>
              <div ref={strRef} id='players'>
                <FablesMythsHero />
              </div>
             
          
        </div>
        <div className='MappG'>
          <NavigationMenu defaultActive='fablesMyths'/>
          <div className="containerFM">
            <img src={Mountain} alt="Snow" style={{width:'100%'}}/>
          <div className="centered"><h1>Metavist story</h1></div>
        </div>
         <div ref={strRef} id='players'>
                <FablesMythsHero />
              </div>
        </div>

</>
  )
}

export default StoryHero