import { useState } from "react"
import CharZ from '../../../assets/img/charZ.png'
import CharB from '../../../assets/img/charB.png'
import CharJ from '../../../assets/img/charJ.png'
import CharP from '../../../assets/img/charP.png'
import CharA from '../../../assets/img/charA.png'
import { HashLink } from "react-router-hash-link"
import Stories from "./stories"

function FablesMythsHero(props) {
    const [character, setCharacter] = useState('Thunderbird B')
  return (
    <div className="characterHeroSection">
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