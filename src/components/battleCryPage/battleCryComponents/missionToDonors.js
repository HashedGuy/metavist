import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Mtd from '../../../assets/img/mtd.png'

function MissionToDonors(props) {
  const [box, setBox] = useState('')
  return (
    <div className='briefStorySection' ref={props.refG} id='mtdRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Values of a Metavist</h1>
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
        <img src={Mtd} className='valuesImg'/>
    </div>
  )
}

export default MissionToDonors