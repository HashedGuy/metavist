import {useState} from 'react'

function MissionToNonprofits(props) {
  const [box, setBox] = useState('one')
  return (
    <div className='briefStorySection' ref={props.refG}>
        <div className='valuesSection'>
          <h1 className='valuesTitle'>Values of a Metavist</h1>
          <div className='valuesBoxes'>
                <div className='valuesBox' onClick={()=>setBox('one')}></div>
                <div className='valuesBox' onClick={()=>setBox('two')}></div>
          </div>
          <div className='valuesBoxes'>
                <div className='valuesBox' onClick={()=>setBox('three')}></div>
                <div className='valuesBox' onClick={()=>setBox('four')}></div>
          </div>
        </div>
        <div className='valuesImg'>
          <div style={{fontSize:30}}>{box}</div>
        </div>
    </div>
  )
}

export default MissionToNonprofits