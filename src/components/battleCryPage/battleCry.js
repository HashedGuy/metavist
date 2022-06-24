import React from 'react'
import BattleCryHero from './battleCryComponents/battleCryHero'
import '../homePage/home.css'
import './battleCry.css'
import FoundersMessage from './battleCryComponents/foundersMessage'
import ValuesOfMetavist from './battleCryComponents/valuesOfMetavist'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';

function BattleCry(props) {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: fmRef, inView: fmVisible} = useInView({threshold:.5})
  const { ref: vomRef, inView: vomVisible} = useInView({threshold:.5})
  const { ref: mtdRef, inView: mtdVisible} = useInView({threshold:.5})
  const { ref: mtnRef, inView: mtnVisible} = useInView({threshold:.5})
  return (
    <>
      <div className="App">
      <NavigationMenu defaultActive='battleCry'/>
        <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <div className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={fmVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={vomVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={mtdVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={mtnVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
        </div>
        <div className="pagesContent">
            <BattleCryHero refG={heroRef}/>
            <FoundersMessage refG={fmRef}/>
            <ValuesOfMetavist title='Values of a Metavist' refG={vomRef}/>
            <ValuesOfMetavist title='Mission to Donors' refG={mtdRef}/>
            <ValuesOfMetavist title='Mission to Nonprofits'refG={mtnRef}/>
         </div>
       </div>
      </div>
    </>
  )
}

export default BattleCry