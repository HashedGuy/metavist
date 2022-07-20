import homeHero from '../../../assets/img/final/HomePage_Header.png'
import { HashLink } from 'react-router-hash-link'
import {FaAngleRight} from 'react-icons/fa'

function HomeHero(props) {
  return (
    <>
    <div className="homeHeroSection" ref={props.refG} id='heroHome'>
        <h1 className="heroTitle">Metaverse Activists</h1>
        <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/Home_Page___Header__vV3w0vUGD.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1657873188294' className="heroImg"/>
    </div>
    <div className='ctaBox'>
      <HashLink className="homeReferenceBtn" to={'./fablesMyths#backgroundStoryRef'}>Donate fair </HashLink>
      <p className='briefStoryText'>By holding a Metavists NFT, you will pave the way to easier public tracked donations...</p>
    </div>

     </>
  )
}

export default HomeHero