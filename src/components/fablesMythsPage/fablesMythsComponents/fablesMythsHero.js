import { useState } from "react"
import CharB from '../../../assets/img/final/FablesMyth_MedGuy.png'
import CharJ from '../../../assets/img/final/FablesMyth_Girl.png'
import CharA from '../../../assets/img/final/FablesMyth_BigGuy.png'
import BackstoryImg from '../../../assets/img/final/FablesMyth_Backstory.png'
import { HashLink } from "react-router-hash-link"
import Stories from "./stories"

function FablesMythsHero(props) {
    const [character, setCharacter] = useState('BACKSTORY')
  return (
    <div className="characterHeroSection">
      {/* <BackgroundStory /> */}
      <div className="charactersTogether">
        <HashLink to='#charLetter' smooth><img src={BackstoryImg} className={character==='BACKSTORY'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('BACKSTORY')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharJ} className={character==='NESSIE'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('NESSIE')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharA} className={character==='BIG FOOT'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('BIG FOOT')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharB} className={character==='Thunderbird M'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Thunderbird M')}/></HashLink>
      </div>
       <Stories character={character}/>
    </div>
  )
}

export default FablesMythsHero