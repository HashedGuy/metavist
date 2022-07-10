import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {AiOutlineSafety, AiOutlineHeart, AiOutlineTeam, AiOutlineInteraction} from 'react-icons/ai'
import {GiInspiration} from 'react-icons/gi'

function Exp2(props) {
    const [open, setOpen] = useState('')
  return (
    <div className='exp2Container' ref={props.refG} id='mtdRef'>
       <h1 className='valuesTitle'>Our Mission to You</h1>
       <div className='exp2Div'>
            <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
                {/* {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Secure</div>} */}
                <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='one' ? 
                <>
                <div className='insidePar'>
                <h1><a onClick={()=>setOpen('one')}><AiOutlineSafety/> Protecting your Donations</a></h1>
                <p className='exp2Text'>Nonprofits contribute to 41% of all corruption cases according to ACFE. Such stats have made the public highly skeptical and it has impacted sincere & impactful nonprofits. User friendly open-source transparency is key in fighting corruption & building trust. By holding a Metavists NFT, you will pave the way to easier public tracked donations. A new way to measure & review the impact donations hold all through the Metavists App.  </p>
               
                </div> 
                 <a className='closeBtn' onClick={()=>setOpen('')}>Close</a></>: ''}
                
            
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('one')}><AiOutlineSafety/> Protecting your Donations</a></h1>
                {open==='one' ? <p className='exp2Text'>Nonprofits contribute to 41% of all corruption cases according to ACFE. Such stats have made the public highly skeptical and it has impacted sincere & impactful nonprofits. User friendly open-source transparency is key in fighting corruption & building trust. By holding a Metavists NFT, you will pave the way to easier public tracked donations. A new way to measure & review the impact donations hold all through the Metavists App.  </p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='two' ? 'openedBenefitCard orderB' : 'benefitCard orderB'}>
                {/* {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Impactful</div>} */}
                <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='two' ? 
                <>
                 <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('two')}><AiOutlineHeart/> Impact and Satisfaction</a></h1>
                    <p className='exp2Text'>Data & metrics are key factors for donors like you in evaluating the impact of your favourite social impact project.  This missing element must raise thoughts in the mind like, “Oh, you raised a million dollars but only fed five thousand?” Founders send investors updates monthly and we believe you deserve to be in that conversation as well. We Metavists want a future where every donor gets to feel the satisfaction of looking at the impact their donation made with a full heart. You deserve more than just a short shot of happiness at the moment of donation. By supporting the Metavists project, we will build a future where donations mean so much more than they do now.</p>
                 </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('two')}><AiOutlineHeart/> Impact and Satisfaction</a></h1>
                {open==='two' ? <p className='exp2Text'>Data & metrics are key factors for donors like you in evaluating the impact of your favourite social impact project.  This missing element must raise thoughts in the mind like, “Oh, you raised a million dollars but only fed five thousand?” Founders send investors updates monthly and we believe you deserve to be in that conversation as well. We Metavists want a future where every donor gets to feel the satisfaction of looking at the impact their donation made with a full heart. You deserve more than just a short shot of happiness at the moment of donation. By supporting the Metavists project, we will build a future where donations mean so much more than they do now.</p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
                {/* {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>Valuable</div>} */}
                <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='three' ? 
                <>
                  <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('three')}><AiOutlineTeam/> A Sense of Value</a></h1>
                    <p className='exp2Text'>In the wide net of social media, it’s easy for content to get swept under the rug for the general public and it’s a shame to see such moving stories get buried. Which is why Creators & Influencers have gated content for the higher tier supportive community. We believe you deserve this too. You deserve to be involved with the behind-the-scenes, ground activity and more due your contribution. 
                    <br/><br/>
                    The Metavist will build the perfect platform for soc-impact orgs to connect with a tight knit community of donating supporters with exclusive content accessible only to donors.
                    </p>
                  </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
                
            
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('three')}><AiOutlineTeam/> A Sense of Value</a></h1>
                {open==='three' ? <p className='exp2Text'>In the wide net of social media, it’s easy for content to get swept under the rug for the general public and it’s a shame to see such moving stories get buried. Which is why Creators & Influencers have gated content for the higher tier supportive community. We believe you deserve this too. You deserve to be involved with the behind-the-scenes, ground activity and more due your contribution. 
                <br/><br/>
                The Metavist will build the perfect platform for soc-impact orgs to connect with a tight knit community of donating supporters with exclusive content accessible only to donors.
                </p> : ''}
            </div>
       </div>
       <div className='exp2Div'>
            <div className={open==='four' ? 'openedBenefitCard orderB' : 'benefitCard orderB'}>
                {/* {open==='four' ? '' : <div className="centered" onClick={()=>setOpen('four')}>Inspiring</div>} */}
                <img src={smth} className={open==='four' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='four' ? 
                <>
                <div className='insidePar'>
                    <h1><a onClick={()=>setOpen('four')}><AiOutlineInteraction/> Inspiration through Action</a></h1>
                    <p className='exp2Text'>There are a lot of promises made when it comes to donations. People spouting and throwing empty words to appease people then later journalists finding them to be untrue. You don’t deserve to be cheated in such a way.
                    <br/><br/>
                    In the Metavist App, no one can lie about the contributions they are making. The Giveprint is a simple yet innovative solution that tracks every cause and nonprofit you support on your profile. In the future, users can expect ranking among donors in a plethora of categories. Assuring that the lies and falsehoods of donations will come to an end.
                    </p>
                </div>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className='exp2Paragraph'>
                <h1><a onClick={()=>setOpen('four')}><AiOutlineInteraction/> Inspiration through Action</a></h1>
                {open==='four' ? <p className='exp2Text'>There are a lot of promises made when it comes to donations. People spouting and throwing empty words to appease people then later journalists finding them to be untrue. You don’t deserve to be cheated in such a way.
                <br/><br/>
                In the Metavist App, no one can lie about the contributions they are making. The Giveprint is a simple yet innovative solution that tracks every cause and nonprofit you support on your profile. In the future, users can expect ranking among donors in a plethora of categories. Assuring that the lies and falsehoods of donations will come to an end.
                </p> : ''}
            </div>
       </div>
   
    </div>
  )
}

export default Exp2