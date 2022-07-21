import { useState } from "react"
import MainGuy from '../../../assets/img/final/HomePage_HeroesBF.png'
import Friends from '../../../assets/img/final/HomePage_HeroesLC.png'
import CharMini from '../../../assets/img/final/HomePage_HeroesTB.png'
import { FaAngleRight } from "react-icons/fa"
import { HashLink } from "react-router-hash-link"

function Character(props) {
  const [character, setCharacter] = useState('BF')
  return (
    <div className='briefStorySection' ref={props.refG} id='charRef'>
    <div className='subSection'>
       {/* <h1 className='briefStoryTitle'>CHARACTER</h1>
       <HashLink className="miniChar" to='./fablesMyths#players'><img src={CharMini} className='characterImg'/></HashLink> */}
       <h2 className='characterName'>
         {character==='BF' ? 'BIG FOOT' : character==='LC' ? 'NESSIE' : 'THUNDERBIRD'}
        </h2>
       <p className='briefStoryText'>
          Howdy! They always ask me – how come humans rarely see you in person, and I always tell them – well son,
          <br/><br/>
          I am just too fast! Forget about the rumors, my actual shoe size is 49, and I love taking naps. Last time I took a nap though, it lasted for 200 years..
       </p>
       <HashLink className="homeReferenceBtn" to={'./fablesMyths#players'}>Know your players <FaAngleRight className='iconClass'/></HashLink>
   </div>
   <div className='characterImgs'>
    <img className={character==='LC' ? 'character activeCharacter' : 'character'} src='https://ik.imagekit.io/74qyv5bswgr/Metavists/HomePage_HeroesLC_n5s7wALxE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392424733' onClick={()=>setCharacter('LC')}/>
    <img className={character==='BF' ? 'character activeCharacter' : 'character'} src='https://ik.imagekit.io/74qyv5bswgr/Metavists/HomePage_HeroesBF_ESasBqyDA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392425856' onClick={()=>setCharacter('BF')}/>
    <img className={character==='TB' ? 'character activeCharacter' : 'character'} src='https://ik.imagekit.io/74qyv5bswgr/Metavists/HomePage_HeroesTB_aIt9Bljwb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392427658' onClick={()=>setCharacter('TB')}/>
   </div>
</div>
  )
}

export default Character