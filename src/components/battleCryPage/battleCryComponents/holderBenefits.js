import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {BiMobileVibration} from 'react-icons/bi'
import {RiGovernmentLine} from 'react-icons/ri'
import {BsPlusSquare} from 'react-icons/bs'

function HolderBenefits(props) {
  const [open, setOpen] = useState('')
  return (
    <>
    <h1 className='valuesTitle' style={{textAlign:'center'}}>Metavists Holder Benefits</h1>
    <div className='exp1Container' ref={props.refG} id='mhbRef'>
   
    <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Governance</div>}
                <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='one' ? 
                <>
                <div className='insidePar pro'>
                  <h1><a onClick={()=>setOpen('one')}><RiGovernmentLine/> Governance</a></h1>
                  <p className='exp2Text'>Nonprofits contribute to 41% of all corruption cases according to ACFE. Such stats have made the public highly skeptical and it has impacted sincere & impactful nonprofits. User friendly open-source transparency is key in fighting corruption & building trust. By holding a Metavists NFT, you will pave the way to easier public tracked donations. A new way to measure & review the impact donations hold all through the Metavists App.  </p>
               
                </div> 
                 <a className='closeBtn' onClick={()=>setOpen('')}>Close</a></>: ''}
                
            
            </div>
            <div className={open==='two' ? 'openedBenefitCard orderB' : 'benefitCard orderB'}>
                {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>In-App Utility</div>}
                <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='two' ? 
                <>
                 <div className='insidePar pro'>
                    <h1><a onClick={()=>setOpen('two')}><BiMobileVibration/> Metavists In-App Utility</a></h1>
                    <p className='exp2Text'>Data & metrics are key factors for donors like you in evaluating the impact of your favourite social impact project.  This missing element must raise thoughts in the mind like, “Oh, you raised a million dollars but only fed five thousand?” Founders send investors updates monthly and we believe you deserve to be in that conversation as well. We Metavists want a future where every donor gets to feel the satisfaction of looking at the impact their donation made with a full heart. You deserve more than just a short shot of happiness at the moment of donation. By supporting the Metavists project, we will build a future where donations mean so much more than they do now.</p>
                 </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>Metavists Utility</div>}
                <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='three' ? 
                <>
                  <div className='insidePar pro'>
                    <h1><a onClick={()=>setOpen('three')}><BsPlusSquare/> Metavists Utility</a></h1>
                    <p className='exp2Text'>In the wide net of social media, it’s easy for content to get swept under the rug for the general public and it’s a shame to see such moving stories get buried. Which is why Creators & Influencers have gated content for the higher tier supportive community. We believe you deserve this too. You deserve to be involved with the behind-the-scenes, ground activity and more due your contribution. 
                    <br/><br/>
                    The Metavist will build the perfect platform for soc-impact orgs to connect with a tight knit community of donating supporters with exclusive content accessible only to donors.
                    </p>
                  </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
 </div>
 </>
  )
}

export default HolderBenefits