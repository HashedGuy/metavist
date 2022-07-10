import { useState } from 'react'
import Tree from '../../../assets/img/dest2.png'
import Dest2 from '../../../assets/img/dest1.png'
import Dest3 from '../../../assets/img/dest3.png'
import Dest4 from '../../../assets/img/dest4.png'
import Dest5 from '../../../assets/img/dest5.png'
import Dest6 from '../../../assets/img/dest6.png'
import { HashLink } from 'react-router-hash-link'

function RoadmapHero(props) {
  const [destination, setDestination] = useState('Destionation 1')
  return (
    <>
    <div className='roadmapHero' ref={props.refG} id='roadmap'>
        <div className='roadmap'>
          <HashLink to='#destination' smooth><img src={Tree}  onClick={()=>setDestination('Destionation 1')} className={destination==='Destionation 1'? 'foregroundImg activeBox' : "foregroundImg"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest2} onClick={()=>setDestination('Destionation 2')} className={destination==='Destionation 2'? 'foregroundImgTwo activeBox' : "foregroundImgTwo"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest3} onClick={()=>setDestination('Destionation 3')} className={destination==='Destionation 3'? 'foregroundImgThree activeBox' : "foregroundImgThree"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest4} onClick={()=>setDestination('Destionation 4')} className={destination==='Destionation 4'? 'foregroundImg activeBox' : "foregroundImg"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest5} onClick={()=>setDestination('Destionation 5')} className={destination==='Destionation 5'? 'foregroundImgTwo activeBox' : "foregroundImgTwo"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest6} onClick={()=>setDestination('Destionation 6')} className={destination==='Destionation 6'? 'foregroundImgThree activeBox' : "foregroundImgThree"} alt=''/></HashLink>
        </div>
    </div>
          <div className='briefStorySection'  id='destination'>
          <div className='subSection'>
             <h1 className='briefStoryTitle'>{destination}</h1>
        
             <p className='briefStoryText'>
                 This is a story of the mythical legends we heard from ancient cultures & civilizations for thousands of years. Yes, they are true! They were entrusted to rise when humanity fails to preserve Earth & Her people.
                 <br/><br/>
                 However, the LOM does not believes humanity failed because we did not care. But we failed because the system through which we ‘care’ is broken beyond repair.
             </p>
         </div>
         <div className='roadmapStoryImg'>
           {destination}
         </div>
     </div>
     </>
  )
}

export default RoadmapHero