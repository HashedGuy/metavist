import { useState } from "react"
import MainGuy from '../../../assets/img/mainGuy.png'
import Friends from '../../../assets/img/friends.png'
import CharMini from '../../../assets/img/charMini.png'
import { HashLink } from "react-router-hash-link"

function Character(props) {
  const [character, setCharacter] = useState('bigBoy')
  return (
    <div className='briefStorySection' ref={props.refG} id='charRef'>
    <div className='subSection'>
       <h1 className='briefStoryTitle'>CHARACTER</h1>
       <img src={CharMini} className='characterImg'/>
       <h2 className='characterName'>
         {character==='bigBoy' ? 'BIG BOY' : character==='potter' ? 'POTTER' : 'WEASLEY'}
        </h2>
       <p className='briefStoryText'>
          Howdy! They always ask me – how come humans rarely see you in person, and I always tell them – well son,
          <br/><br/>
          I am just too fast! Forget about the rumors, my actual shoe size is 49, and I love taking naps. Last time I took a nap though, it lasted for 200 years..
       </p>
       <HashLink className="homeReferenceBtn" to={'./fablesMyths#strRef'}>Know your characters</HashLink>
   </div>
   <div className='characterImgs'>
    <img className={character==='bigBoy' ? 'character activeCharacter' : 'character'} src={MainGuy} onClick={()=>setCharacter('bigBoy')}/>
    <img className={character==='potter' ? 'character activeCharacter' : 'character'} src={Friends} onClick={()=>setCharacter('potter')}/>
     {/* <div className='character' onClick={()=>setCharacter('weasley')}>3</div> */}
   
   </div>
</div>
  )
}

export default Character