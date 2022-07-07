import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {BiMobileVibration} from 'react-icons/bi'
import {RiGovernmentLine} from 'react-icons/ri'
import {BsPlusSquare} from 'react-icons/bs'
import Demon from '../../../assets/img/demon.png'

function HolderBenefits(props) {
  const [open, setOpen] = useState('')
  return (
    <>
    <h1 className='valuesTitle' style={{textAlign:'center'}} ref={props.refG} id='vomRef'>Values of Metavists</h1>
    <div className='exp1Container demonContainer' >
   
   <div className='benefitCard' >
     <div className='innerCard'>
      <div className='frontCard'>
       <h1>Intelligence</h1>
       <img src={Demon} className='coverImg'/>
      </div>
      <div className='backCard'>
        <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Intelligence</a></h1>
        <p className='exp2Text'>You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds. </p>
      </div>
     </div>
   </div>

  <div className='demonImg'>
    <img className='demonImgZ' src={smth}/>
  </div>

  <div className='benefitCard' >
     <div className='innerCard'>
      <div className='frontCard'>
       <h1>Vision</h1>
       <img src={Demon} className='coverImg'/>
      </div>
      <div className='backCard'>
        <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Vision</a></h1>
        <p className='exp2Text'>You believe bold ideas are the road to a brighter future. Blazing a path of your very own.</p>
      </div>
     </div>
   </div>
</div>

    <div className='exp1Container demonContainer' >
   
      <div className='benefitCard' >
        <div className='innerCard'>
          <div className='frontCard'>
          <h1>Generosity</h1>
          <img src={Demon} className='coverImg'/>
          </div>
          <div className='backCard'>
            <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Generosity</a></h1>
            <p className='exp2Text'>You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others. </p>
          </div>
        </div>
      </div>
            
    <div className='benefitCard downCard' >
      <div className='innerCard'>
        <div className='frontCard'>
        <h1>Unity</h1>
        <img src={Demon} className='coverImg'/>
        </div>
        <div className='backCard'>
          <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Universal Unity</a></h1>
          <p className='exp2Text'>You believe that we are all in this together. You want to be able to lift all of us up together. Striving to know and respect the differences we hold as humans.  </p>
        </div>
      </div>
    </div>
    <div className='benefitCard' >
     <div className='innerCard'>
      <div className='frontCard'>
       <h1>Awareness</h1>
       <img src={Demon} className='coverImg'/>
      </div>
      <div className='backCard'>
        <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Awareness</a></h1>
        <p className='exp2Text'>You have your finger on the pulse of what’s happening. You want to make changes before they occur. </p>
      </div>
     </div>
   </div>
 </div>
 </>
  )
}

export default HolderBenefits