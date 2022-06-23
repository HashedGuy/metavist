import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function ValuesOfMetavist(props) {
  const [status, setStatus] = useState('')
  const [box, setBox] = useState('one')
  return (
    <div className='briefStorySection'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>{props.title}</h1>
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
                <AiOutlineClose className='closeIcon' onClick={()=>setStatus('')}/>
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

export default ValuesOfMetavist