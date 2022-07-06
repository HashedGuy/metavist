import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {AiOutlineSafety, AiOutlineHeart} from 'react-icons/ai'

function Exp2() {
    const [open, setOpen] = useState('')
  return (
    <div className='exp2Container'>
       <h1 className='valuesTitle'>Experimental 2</h1>
       <div className='exp2Div'>
            <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Secure</div>}
                <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='one' ? 
                <>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
                
            
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('one')}><AiOutlineSafety/> Protecting your Donations</a></h1>
                {open==='one' ? <p className='exp2Text'>Nonprofits contribute to 41% of all corruption cases according to ACFE. Such stats have made the public highly skeptical and it has impacted sincere & impactful nonprofits. User friendly open-source transparency is key in fighting corruption & building trust. By holding a Metavists NFT, you will pave the way to easier public tracked donations. A new way to measure & review the impact donations hold all through the Metavists App.  </p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='two' ? 'openedBenefitCard order' : 'benefitCard order'}>
                {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Impactful</div>}
                <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='two' ? 
                <>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('two')}><AiOutlineHeart/> Impact and Satisfaction</a></h1>
                {open==='two' ? <p className='exp2Text'>Data & metrics are key factors for donors like you in evaluating the impact of your favourite social impact project.  This missing element must raise thoughts in the mind like, “Oh, you raised a million dollars but only fed five thousand?” Founders send investors updates monthly and we believe you deserve to be in that conversation as well. We Metavists want a future where every donor gets to feel the satisfaction of looking at the impact their donation made with a full heart. You deserve more than just a short shot of happiness at the moment of donation. By supporting the Metavists project, we will build a future where donations mean so much more than they do now.</p> : ''}
            </div>
       </div>
   
    </div>
  )
}

export default Exp2