import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function ValuesOfMetavist(props) {
  const [box, setBox] = useState('')
  console.log(box)
  return (
    <div className='briefStorySection' ref={props.refG} id='vomRef'>
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
                    <a onClick={()=>setBox('')}>Back</a>
                </div>
               </>}
                
              </div>
        </div>
        <div className='valuesImg'>
          <div style={{fontSize:30}}>{box}</div>
        </div>
    </div>
  )
}

export default ValuesOfMetavist