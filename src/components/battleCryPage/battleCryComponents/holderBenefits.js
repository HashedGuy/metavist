import { useState } from 'react'
import {motion} from 'framer-motion'

function HolderBenefits(props) {
  const [open, setOpen] = useState('Intelligence')
  return (
    <div className='battleCrySection' ref={props.refG} id='vomRef'>
    <h1 className='valuesTitle' style={{textAlign:'center'}} >Values of Metavists</h1>
    <div className='vomContainer' style={{backgroundImage: `url('https://ik.imagekit.io/74qyv5bswgr/Metavists/opacityAnime_OzJZW958S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658046343823)`}}>
    <div className='exp1Container demonContainer' >
   
   <div className={open==='Generosity'? 'benefitCard activeBenefitCard': 'benefitCard'} onClick={()=>setOpen('Generosity')}>
     Generous
   </div>
         
 <div className={open==='Unity'? 'benefitCard downCard activeBenefitCard': 'benefitCard downCard'} onClick={()=>setOpen('Unity')}>
  United
 </div>
</div>

    <div className='exp1Container demonContainer'>
   
   <div className={open==='Intelligence'? 'benefitCard activeBenefitCard': 'benefitCard'} onClick={()=>setOpen('Intelligence')}>
     Intelligent
   </div>

  <div className='demonImg'>
    <img className='demonImgZ' src='https://ik.imagekit.io/74qyv5bswgr/Metavists/vom_ull6ehpIB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392076359'/>
  </div>

  <motion.div className='benefitText' >
   <p>
     {open==='Intelligence' ? 
     'You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds.' : 
     open==='Vision' ? 
     'You believe bold ideas are the road to a brighter future. Blazing a path of your very own.' :
     open==='Generosity' ? 
     'You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others.' :
     open==='Unity' ? 
     'You believe that we are all in this together. You want to be able to lift all of us up together. Striving to know and respect the differences we hold as humans.' :
     open==='Awareness' ? 
     'You have your finger on the pulse of what’s happening. You want to make changes before they occur.'
     : ''}</p>
   </motion.div>
</div>

<div className='exp1Container demonContainer' >
   
   <div className={open==='Vision'? 'benefitCard activeBenefitCard': 'benefitCard'} onClick={()=>setOpen('Vision')}>
     Visionary
   </div>
         
 <div className={open==='Awareness'? 'benefitCard downCard activeBenefitCard': 'benefitCard downCard'} onClick={()=>setOpen('Awareness')}>
   Aware
 </div>

</div>
    </div>
 


 </div>
  )
}

export default HolderBenefits