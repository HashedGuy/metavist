import { useState } from 'react'
import smth from '../../../assets/img/vom.png'
import {AiOutlineSafety, AiOutlineHeart, AiOutlineTeam, AiOutlineInteraction} from 'react-icons/ai'
import {MdOutlineMonetizationOn, MdOutlineGroups} from 'react-icons/md'
import {FaLaptopCode, FaVoteYea} from 'react-icons/fa'

function MissionToNonProfits(props) {
  const [open, setOpen] = useState('')
  return (
    <>
    <h1 className='valuesTitle' style={{textAlign:'center'}} id='mtnRef'>Our Mission to Nonprofits</h1>
    <div className='exp1Container' ref={props.refG} >
   
    <div className='exp2Div exp1Div'>
         <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
             {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Secure</div>}
             <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='one' ? 
             <>
              <div className='insidePar'>
                  <h1><a onClick={()=>setOpen('one')}><FaLaptopCode/> Technology</a></h1>
                  <p className='exp2Text'>The world is constantly shifting. It’s in a constant state of evolutions and changes. Yet, it would seem that when these evolutions shift the flow of industry the corporate giants are a large step beyond the public service sector. Our commitment is to put the social impact industry at the centre of benefits as we equip them with the technology to serve them efficiently, truthfully & transparently. 
                  <br/><br/>
                  By being part of the Metavists Community,  you hold the wheel as we drive this industry into the future. Standing shoulder to shoulder with private industry. With this we will be fueling innovations for a better and brighter world.
                  </p>
               
                </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
             
         
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('one')}><FaLaptopCode/> <br/>Technology</a></h1>
             {open==='one' ? <p className='exp2Text'>The world is constantly shifting. It’s in a constant state of evolutions and changes. Yet, it would seem that when these evolutions shift the flow of industry the corporate giants are a large step beyond the public service sector. Our commitment is to put the social impact industry at the centre of benefits as we equip them with the technology to serve them efficiently, truthfully & transparently. 
            <br/><br/>
            By being part of the Metavists Community,  you hold the wheel as we drive this industry into the future. Standing shoulder to shoulder with private industry. With this we will be fueling innovations for a better and brighter world.
            </p> : ''}
         </div>
    </div>
    <div className='exp2Div exp1Div'>
         <div className={open==='two' ? 'openedBenefitCard' : 'benefitCard'}>
             {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Impactful</div>}
             <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='two' ? 
             <>
             <div className='insidePar'>
                  <h1><a onClick={()=>setOpen('two')}><MdOutlineGroups/> Community</a></h1>
                  <p className='exp2Text'> Community is key for any brand. Social media is one of the best places to cultivate a community.  Though it’s easy to see that today’s social media is a playground holding creators, influencers and brands to a higher degree.. Mission driven causes and activists find themselves left behind. There are apps for video content, audio engagement, sharing thoughts, and even to grow your professional career. What’s missing from those is a social app with a focus on doing good as a collective. A social app used to bring together useful tools to protect, preserve, and sustain Earth and its inhabitants.
                  <br/><br/>
                  We need a social app for social impact! The best part is that we are going to build it together! A nexus point for community building, efficiency, and supporting impactful organizations financially.  A protected space for all kinds of legally ethical social impact projects and organizations.
                  </p>
               
                </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('two')}><MdOutlineGroups/> <br/>Community</a></h1>
             {open==='two' ? <p className='exp2Text'> Community is key for any brand. Social media is one of the best places to cultivate a community.  Though it’s easy to see that today’s social media is a playground holding creators, influencers and brands to a higher degree.. Mission driven causes and activists find themselves left behind. There are apps for video content, audio engagement, sharing thoughts, and even to grow your professional career. What’s missing from those is a social app with a focus on doing good as a collective. A social app used to bring together useful tools to protect, preserve, and sustain Earth and its inhabitants.
            <br/><br/>
            We need a social app for social impact! The best part is that we are going to build it together! A nexus point for community building, efficiency, and supporting impactful organizations financially.  A protected space for all kinds of legally ethical social impact projects and organizations.
            </p> : ''}
         </div>
    </div>
    <div className='exp2Div exp1Div'>
         <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
             {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>Valuable</div>}
             <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='three' ? 
             <>
              <div className='insidePar'>
                <h1><a onClick={()=>setOpen('three')}><MdOutlineMonetizationOn/> Monetization</a></h1>
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
             <h1><a onClick={()=>setOpen('three')}><MdOutlineMonetizationOn/> <br/>Monetization</a></h1>
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
             {open==='four' ? '' : <div className="centered" onClick={()=>setOpen('four')}>Inspiring</div>}
             <img src={smth} className={open==='four' ? 'coverImg smaller' : 'coverImg'}/>
             {open==='four' ? 
             <>
              <div className='insidePar'>
              <h1><a onClick={()=>setOpen('four')}><FaVoteYea/> Democratize Capital</a></h1>
              <p className='exp2Text'>$474 Billion is no small amount of money.  This amount has the potential to change the world around us as we know it. This is the annual amount just the American working people donate to the various nonprofits. However many small but impactful nonprofits are struggling to stay afloat fighting alongside organisations with huge marketing budgets but low impact. 
              <br/><br/>
              Can you imagine the impact we can mold if we can deploy this fund democratically? Stripping away the brand names or years of existence to social impact organisations and basing it solely on merit & credits? This is the future we are fighting to create with you!

              </p>
               
                </div> 
             <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
             </> : ''}
         </div>
         <div className='exp2Paragraph'>
             <h1><a onClick={()=>setOpen('four')}><FaVoteYea/> <br/>Democratize Capital</a></h1>
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