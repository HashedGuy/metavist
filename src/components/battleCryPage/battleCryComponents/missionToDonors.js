import {useState} from 'react'

function MissionToDonors() {
  const [box, setBox] = useState('one')
  return (
    <div className='briefStorySection'>
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

export default MissionToDonors