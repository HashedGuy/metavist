import { useState } from "react"
import CharZ from '../../../assets/img/charZ.png'
import CharB from '../../../assets/img/charB.png'
import CharJ from '../../../assets/img/charJ.png'
import CharP from '../../../assets/img/charP.png'
import CharA from '../../../assets/img/charA.png'
import { HashLink } from "react-router-hash-link"
import Stories from "./stories"

function FablesMythsHero(props) {
    const [character, setCharacter] = useState('Big Boy')
  return (
    <div className="characterHeroSection">
      <div className="charactersTogether">
        <HashLink to='#charLetter' smooth><img src={CharP} className={character==='Luna'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Luna')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharZ} className={character==='Cedric'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Cedric')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharA} className={character==='Big Boy'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Big Boy')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharJ} className={character==='Hermoine'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Hermoine')}/></HashLink>
        <HashLink to='#charLetter' smooth><img src={CharB} className={character==='Weasley'? 'charLetter selectedCharacter': 'charLetter'} onClick={()=>setCharacter('Weasley')}/></HashLink>
      </div>
       <Stories character={character}/>
    </div>
  )
}

export default FablesMythsHero