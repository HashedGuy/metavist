import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Mtd from '../../../assets/img/mtd.png'

function MissionToNonprofits(props) {
    const [box, setBox] = useState('')
  return (
    <div className='battleCrySection' ref={props.refG} id='mtnRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Our Mission to Nonprofits</h1>
             <div className='valuesBoxes'>
               {box==='' ? 
               <>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('one')}
                  >
                    Technology
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('two')}>
                    Community
                </div>

                <div 
                  className='valuesBox'
                  onClick={()=>setBox('three')}>
                    Monetization
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('four')} >
                   Democratize Capital
                </div>
               </>
               : 
               <>
                <div className='openBox'>
                  {box==='one' ? 
                  <>
                    <p>The world is constantly shifting. It’s in a constant state of evolutions and changes. Yet, it would seem that when these evolutions shift the flow of industry the corporate giants are a large step beyond the public service sector. Our commitment is to put the social impact industry at the centre of benefits as we equip them with the technology to serve them efficiently, truthfully & transparently. 
                    <br/><br/>
                    By being part of the Metavists Community,  you hold the wheel as we drive this industry into the future. Standing shoulder to shoulder with private industry. With this we will be fueling innovations for a better and brighter world.
 </p>
                  </>
                  :
                  box==='two' ? 
                <>
                  <p>
                  Community is key for any brand. Social media is one of the best places to cultivate a community.  Though it’s easy to see that today’s social media is a playground holding creators, influencers and brands to a higher degree.. Mission driven causes and activists find themselves left behind. There are apps for video content, audio engagement, sharing thoughts, and even to grow your professional career...
                  <br/><br/>
                  We need a social app for social impact! The best part is that we are going to build it together! A nexus point for community building, efficiency, and supporting impactful organizations financially.  A protected space for all kinds of legally ethical social impact projects and organizations.
                  </p>
                </>
                :
                box==='three' ? 
                <>
                  <p>Fundraising is an extremely time consuming, expensive & resource rich process. It can take upwards of 6 months with costs up to 50% of funds raised. We would love to see social impact organisations using a more sustainable & sleek approach. Through a system of recurring donations, accepting both fiat & cryptocurrencies, It has already proven to be a major success.</p>
                  <ul>
                      <li>Subscription donors are 5x more valuable than 1-time donors</li>
                      <li>Subscription donors give 42% more than 1-time donors</li>
                      <li>52% of Millennials are more likely to give monthly</li>
                      <li>Improved & distributed cash flow</li>
                      <li>Increased donations through Crypto Investors</li>
                  </ul>
                </>
                :
                <>
                  <p>$474 Billion is no small amount of money.  This amount has the potential to change the world around us as we know it. This is the annual amount just the American working people donate to the various nonprofits. However many small but impactful nonprofits are struggling to stay afloat fighting alongside organisations with huge marketing budgets but low impact. 
                  <br/><br/>
                  Can you imagine the impact we can mold if we can deploy this fund democratically? Stripping away the brand names or years of existence to social impact organisations and basing it solely on merit & credits? This is the future we are fighting to create with you!
                  </p>
                </>}
                   <br/>
                    <a onClick={()=>setBox('')}><AiOutlineClose className='closeIcon'/></a>
                </div>
               </>}
                
              </div>
        </div>
        <img src={Mtd} className='valuesImg'/>
    </div>
  )
}

export default MissionToNonprofits