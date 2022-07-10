import React from 'react'
import BattleCryHero from './battleCryComponents/battleCryHero'
import '../homePage/home.css'
import './battleCry.css'
import FoundersMessage from './battleCryComponents/foundersMessage'
import ValuesOfMetavist from './battleCryComponents/valuesOfMetavist'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';
import {FaRegDotCircle} from 'react-icons/fa'
import MissionToDonors from './battleCryComponents/missionToDonors'
import { HashLink } from 'react-router-hash-link'
import HolderBenefits from './battleCryComponents/holderBenefits'
import Exp2 from './battleCryComponents/exp2'

function BattleCry(props) {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: fmRef, inView: fmVisible} = useInView({threshold:.3})
  const { ref: vomRef, inView: vomVisible} = useInView({threshold:.3})
  const { ref: mtdRef, inView: mtdVisible} = useInView({threshold:.3})
  const { ref: mtnRef, inView: mtnVisible} = useInView({threshold:.3})
  const { ref: mhbRef, inView: mhbVisible} = useInView({threshold: .3})
  return (
    <>
      <div className="App" id='bcId'>
      <NavigationMenu defaultActive='battleCry'/>
        <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <HashLink to='#bcId' smooth><FaRegDotCircle className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#fmRef' smooth><FaRegDotCircle className={fmVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#vomRef' smooth><FaRegDotCircle className={vomVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#mtnRef' smooth><FaRegDotCircle className={mtnVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          <HashLink to='#mtdRef' smooth><FaRegDotCircle className={mtdVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink>
          {/* <HashLink to='#mhbRef' smooth><FaRegDotCircle className={mhbVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}/></HashLink> */}
        </div>
        <div className="pagesContent">
            <BattleCryHero refG={heroRef}/>
            <FoundersMessage refG={fmRef}/>
            <HolderBenefits refG={vomRef}/>
            <ValuesOfMetavist refG={mtnRef}/>
            <Exp2 refG={mtdRef}/>
            {/* <MissionToNonprofits refG={mhbRef}/> */}
        
         </div>
       </div>
      </div>
    </>
  )
}

export default BattleCry