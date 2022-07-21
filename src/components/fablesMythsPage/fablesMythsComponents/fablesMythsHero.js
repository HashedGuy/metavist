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
        <HashLink to='#charLetter' smooth><img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/FablesMyth_Backstory_AWBZPwXgJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658393672843' className={character==='BACKSTORY'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('BACKSTORY')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/FablesMyth_Girl_W02vapLuO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658393662818' className={character==='NESSIE'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('NESSIE')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/FablesMyth_BigGuy_yItM6D82z.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658393663383' className={character==='BIG FOOT'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('BIG FOOT')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/FablesMyth_MedGuy_T5jgWnYMH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658393664158' className={character==='Thunderbird M'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Thunderbird M')}/></HashLink>
      </div>
       <Stories character={character}/>
    </div>
  )
}

export default FablesMythsHero