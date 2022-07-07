import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {AiOutlineSafety, AiOutlineHeart, AiOutlineTeam, AiOutlineInteraction} from 'react-icons/ai'
import {MdOutlineMonetizationOn, MdOutlineGroups} from 'react-icons/md'
import {FaLaptopCode, FaVoteYea} from 'react-icons/fa'

function MissionToNonProfits(props) {
  const [open, setOpen] = useState('')
  return (
    <>
    <h1 className='valuesTitle' style={{textAlign:'center'}} ref={props.refG} id='mhbRef'>Metavists Holder Benefits</h1>
    <div className='exp1Container' >
   
  
    <div className='exp2Div exp1Div'>
         <div className={open==='two' ? 'openedBenefitCard' : 'benefitCard'}>
             {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Governance</div>}
             <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='two' ? 
             <>
             <div className='insidePar'>
                  <h1><a onClick={()=>setOpen('two')}><MdOutlineGroups/> Governance</a></h1>
                  <p className='exp2Text'> Community is key for any brand. Social media is one of the best places to cultivate a community.  Though it’s easy to see that today’s social media is a playground holding creators, influencers and brands to a higher degree.. Mission driven causes and activists find themselves left behind. There are apps for video content, audio engagement, sharing thoughts, and even to grow your professional career. What’s missing from those is a social app with a focus on doing good as a collective. A social app used to bring together useful tools to protect, preserve, and sustain Earth and its inhabitants.
                  <br/><br/>
                  We need a social app for social impact! The best part is that we are going to build it together! A nexus point for community building, efficiency, and supporting impactful organizations financially.  A protected space for all kinds of legally ethical social impact projects and organizations.
                  </p>
               
                </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('two')}><MdOutlineGroups/> <br/>Governance</a></h1>
             {open==='two' ? <p className='exp2Text'> Community is key for any brand. Social media is one of the best places to cultivate a community.  Though it’s easy to see that today’s social media is a playground holding creators, influencers and brands to a higher degree.. Mission driven causes and activists find themselves left behind. There are apps for video content, audio engagement, sharing thoughts, and even to grow your professional career. What’s missing from those is a social app with a focus on doing good as a collective. A social app used to bring together useful tools to protect, preserve, and sustain Earth and its inhabitants.
            <br/><br/>
            We need a social app for social impact! The best part is that we are going to build it together! A nexus point for community building, efficiency, and supporting impactful organizations financially.  A protected space for all kinds of legally ethical social impact projects and organizations.
            </p> : ''}
         </div>
    </div>
    <div className='exp2Div exp1Div'>
         <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
             {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>In-App Utility</div>}
             <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='three' ? 
             <>
              <div className='insidePar'>
                <h1><a onClick={()=>setOpen('three')}><MdOutlineMonetizationOn/> Metavists In-App Utility</a></h1>
                <p className='exp2Text'>Fundraising is an extremely time consuming, expensive & resource rich process. It can take upwards of 6 months with costs up to 50% of funds raised. We would love to see social impact organisations using a more sustainable & sleek approach. Through a system of recurring donations, accepting both fiat & cryptocurrencies, It has already proven to be a major success:
                </p>
                <ul>
                  <li>Subscription donors are 5x more valuable than 1-time donors</li>
                  <li>Subscription donors give 42% more than 1-time donors</li>
                  <li>52% of Millennials are more likely to give monthly</li>
                  <li>Improved & distributed cash flow</li>
                  <li>Increased donations through Crypto Investors</li>
                </ul>
              </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
             
         
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('three')}><MdOutlineMonetizationOn/> <br/>Metavists In-App Utility</a></h1>
             {open==='three' ? 
             <>
                <p className='exp2Text'>Fundraising is an extremely time consuming, expensive & resource rich process. It can take upwards of 6 months with costs up to 50% of funds raised. We would love to see social impact organisations using a more sustainable & sleek approach. Through a system of recurring donations, accepting both fiat & cryptocurrencies, It has already proven to be a major success:
              </p>
              <ul>
                <li>Subscription donors are 5x more valuable than 1-time donors</li>
                <li>Subscription donors give 42% more than 1-time donors</li>
                <li>52% of Millennials are more likely to give monthly</li>
                <li>Improved & distributed cash flow</li>
                <li>Increased donations through Crypto Investors</li>
              </ul>
             </>
            : ''}
         </div>
    </div>
    <div className='exp2Div exp1Div'>
         <div className={open==='four' ? 'openedBenefitCard' : 'benefitCard '}>
             {open==='four' ? '' : <div className="centered" onClick={()=>setOpen('four')}>Utility</div>}
             <img src={smth} className={open==='four' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='four' ? 
             <>
              <div className='insidePar'>
              <h1><a onClick={()=>setOpen('four')}><FaVoteYea/> Metavists Utility</a></h1>
              <p className='exp2Text'>$474 Billion is no small amount of money.  This amount has the potential to change the world around us as we know it. This is the annual amount just the American working people donate to the various nonprofits. However many small but impactful nonprofits are struggling to stay afloat fighting alongside organisations with huge marketing budgets but low impact. 
              <br/><br/>
              Can you imagine the impact we can mold if we can deploy this fund democratically? Stripping away the brand names or years of existence to social impact organisations and basing it solely on merit & credits? This is the future we are fighting to create with you!

              </p>
               
                </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('four')}><FaVoteYea/> <br/>Metavists Utility</a></h1>
             {open==='four' ? <p className='exp2Text'>$474 Billion is no small amount of money.  This amount has the potential to change the world around us as we know it. This is the annual amount just the American working people donate to the various nonprofits. However many small but impactful nonprofits are struggling to stay afloat fighting alongside organisations with huge marketing budgets but low impact. 
            <br/><br/>
            Can you imagine the impact we can mold if we can deploy this fund democratically? Stripping away the brand names or years of existence to social impact organisations and basing it solely on merit & credits? This is the future we are fighting to create with you!

             </p> : ''}
         </div>
    </div>

 </div>
 </>
  )
}

export default MissionToNonProfits