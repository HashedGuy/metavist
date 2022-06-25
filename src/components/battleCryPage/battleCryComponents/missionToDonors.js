import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function MissionToDonors(props) {
  const [status, setStatus] = useState('')
  const [box, setBox] = useState('default')
  return (
    <div className='briefStorySection' ref={props.refG} id='mtdRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Mission to Donors</h1>
           {status!=='' ? 
           <>
            <div className='valuesBoxes'>
              <div className='valuesOpenBox'>
                <h2>
                  {status==='one' ? "The Sorcerer's Stone" : 
                  status==='two' ? 'The Chamber of Secrets' :
                  status==='three' ? 'The Prisoner of Azkaban'
                  : 'The Goblet of Fire'}
                </h2>
                <AiOutlineClose 
                  className='closeIcon' 
                  onClick={()=>{
                    setBox('default')
                    setStatus('')}}/>
              </div>
            </div>
           </> 
           : 
           <>
             <div className='valuesBoxes'>
                <div 
                  className='valuesBox' 
                  onClick={()=>{
                    setBox('one') 
                    setStatus('one')}}>
                </div>
                <div 
                  className='valuesBox' 
                  onClick={()=>{
                    setBox('two') 
                    setStatus('two')}}>
                </div>
              </div>
              <div className='valuesBoxes'>
              <div 
                  className='valuesBox' 
                  onClick={()=>{
                    setBox('three') 
                    setStatus('three')}}>
                </div>
                <div 
                  className='valuesBox' 
                  onClick={()=>{
                    setBox('four') 
                    setStatus('four')}}>
                </div>
              </div>
           </>}
          
        </div>
        <div className='valuesImg'>
          <div style={{fontSize:30}}>{box}</div>
        </div>
    </div>
  )
}

export default MissionToDonors