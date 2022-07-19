import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {AiOutlineSafety, AiOutlineHeart, AiOutlineTeam, AiOutlineInteraction} from 'react-icons/ai'
import {GiInspiration, GiMoneyStack} from 'react-icons/gi'
import {TbScale, TbClick} from 'react-icons/tb'
import {FaPeopleCarry} from 'react-icons/fa'

function MissionToNonprofits(props) {
    const [open, setOpen] = useState('')
  return (
    <div className='exp2Container' ref={props.refG} id='mtnRef'>
       <h1 className='valuesTitle'>Our Mission to Nonprofits</h1>
       <div className='exp2Div'>
            <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
                {/* {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Secure</div>} */}
                <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'} onClick={()=>setOpen('one')}/>
                {open==='one' ? 
                <>
                <div className='insidePar'>
                <h1><a onClick={()=>setOpen('one')}><TbClick/> Technology</a></h1>
                <p className='exp2Text'>You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds.  </p>
               
                </div> 
                 <a className='closeBtn' onClick={()=>setOpen('')}>Close</a></>: ''}
                
            
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('one')}><TbClick/> Technology</a></h1>
                {open==='one' ? <p className='exp2Text'>You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds. </p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='two' ? 'openedBenefitCard orderB' : 'benefitCard orderB'}>
                {/* {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Impactful</div>} */}
                <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'} onClick={()=>setOpen('two')}/>
                {open==='two' ? 
                <>
                 <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('two')}><FaPeopleCarry/> Community</a></h1>
                    <p className='exp2Text'>You believe bold ideas are the road to a brighter future. Blazing a path of your very own.</p>
                 </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('two')}><FaPeopleCarry/> Community</a></h1>
                {open==='two' ? <p className='exp2Text'>You believe bold ideas are the road to a brighter future. Blazing a path of your very own.</p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
                {/* {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>Valuable</div>} */}
                <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'} onClick={()=>setOpen('three')}/>
                {open==='three' ? 
                <>
                  <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('three')}><GiMoneyStack/> Monetization</a></h1>
                    <p className='exp2Text'>You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others.
                    </p>
                  </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
                
            
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('three')}><GiMoneyStack/> Monetization</a></h1>
                {open==='three' ? <p className='exp2Text'>You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others.
                </p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='four' ? 'openedBenefitCard orderB' : 'benefitCard orderB'}>
                {/* {open==='four' ? '' : <div className="centered" onClick={()=>setOpen('four')}>Inspiring</div>} */}
                <img src={smth} className={open==='four' ? 'coverImg smaller' : 'coverImg'} onClick={()=>setOpen('four')}/>
                {open==='four' ? 
                <>
                <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('four')}><TbScale/> Democratise Capital</a></h1>
                    <p className='exp2Text'>You believe that we are all in this together. You want to be able to lift all of us up together. Striving to know and respect the differences we hold as humans.
                    </p>
                </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('four')}><TbScale/> Democratise Capital</a></h1>
                {open==='four' ? <p className='exp2Text'>You believe that we are all in this together. You want to be able to lift all of us up together. Striving to know and respect the differences we hold as humans.
                </p> : ''}
            </div>
       </div>
   
    </div>
  )
}

export default MissionToNonprofits