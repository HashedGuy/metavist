import { useState } from "react"
import CharB from '../../../assets/img/final/FablesMyth_MedGuy.png'
import CharJ from '../../../assets/img/final/FablesMyth_Girl.png'
import CharP from '../../../assets/img/charP.png'
import CharA from '../../../assets/img/final/FablesMyth_BigGuy.png'
import { HashLink } from "react-router-hash-link"
import Stories from "./stories"
import BackgroundStory from "./backgroundStory"

function FablesMythsHero(props) {
    const [character, setCharacter] = useState('Thunderbird B')
  return (
    <div className="characterHeroSection">
      <BackgroundStory />
      <div className="charactersTogether">
        <HashLink to='#charLetter' smooth><img src={CharJ} className={character==='Nessie'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Nessie')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharA} className={character==='Thunderbird B'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Thunderbird B')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharB} className={character==='Thunderbird M'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Thunderbird M')}/></HashLink> <br/>
        <HashLink to='#charLetter' smooth><img src={CharP} className={character==='Luna'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Luna')}/></HashLink>
      </div>
       <Stories character={character}/>
    </div>
  )
}

export default FablesMythsHero