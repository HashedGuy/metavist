import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Vom from '../../../assets/img/vom.png'

function ValuesOfMetavist(props) {
  const [box, setBox] = useState('')
  console.log(box)
  return (
    <div className='battleCrySection' ref={props.refG} id='vomRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Values of a Metavist</h1>
             <div className='valuesBoxes'>
               {box==='' ? 
               <>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('one')}
                  >
                    Intelligence
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('two')}>
                    Vision
                </div>

                <div 
                  className='valuesBox'
                  onClick={()=>setBox('three')}>
                    Generosity
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('four')}>
                    Universal unity
                </div>
               </>
               : 
               <>
                <div className='openBox'>
                  {box==='one' ? 
                  <>
                  <p>You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds.</p>
                  </>
                  :
                  box==='two' ? 
                <>
                  <p>You believe bold ideas are the road to a brighter future. Blazing a path of your very own.</p>
                </>
                :
                box==='three' ? 
                <>
                  <p>You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others.</p>
                </>
                :
                <>
                  <p>You believe that we are all in this together. You want to be able to lift all of us up together. Striving to know and respect the differences we hold as humans.</p>
                </>}
                   <br/>
                    <a onClick={()=>setBox('')}><AiOutlineClose className='closeIcon'/></a>
                </div>
               </>}
                
              </div>
        </div>
        <img src={Vom} className='valuesImg'/>
        
        
    </div>
  )
}

export default ValuesOfMetavist