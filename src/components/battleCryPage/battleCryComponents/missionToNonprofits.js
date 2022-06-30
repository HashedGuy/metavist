import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Mtn from '../../../assets/img/mtn.png'

function MissionToNonProfits(props) {
  const [box, setBox] = useState('')
  return (
    <div className='briefStorySection' ref={props.refG} id='mtnRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Mission to Nonprofits</h1>
             <div className='valuesBoxes'>
               {box==='' ? 
               <>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('one')}
                  >
                    
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('two')}>
                </div>

                <div 
                  className='valuesBox'
                  onClick={()=>setBox('three')}>
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('four')} >
                </div>
               </>
               : 
               <>
                <div className='openBox'>
                  {box==='one' ? 
                  <>
                  One
                  </>
                  :
                  box==='two' ? 
                <>
                Two
                </>
                :
                box==='three' ? 
                <>
                Three
                </>
                :
                <>
              Four
              </>}
                   <br/>
                    <a onClick={()=>setBox('')}><AiOutlineClose className='closeIcon'/></a>
                </div>
               </>}
                
              </div>
        </div>
        <img src={Mtn} className='valuesImg'/>
    </div>
  )
}

export default MissionToNonProfits