import { useState } from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'
import Dest2 from '../../../assets/img/final/PathsOfConquest_Media.png'
import Dest3 from '../../../assets/img/final/PathsOfConquest_Metaverse.png'
import Dest4 from '../../../assets/img/final/PathsOfConquest_Foundation.png'
import Dest5 from '../../../assets/img/final/PathsOfConquest_Community.png'
import Dest6 from '../../../assets/img/final/PathsOfConquest_Media1.png'
import { HashLink } from 'react-router-hash-link'
import {CSSTransition} from 'react-transition-group';

function RoadmapHero(props) {
  const [destination, setDestination] = useState('#1. The Metavists App')
  const [showMore, setShowMore] = useState(false)
  return (
    <>
    <div className='roadmapHero' ref={props.refG} id='roadmap'>
        <div className='roadmap'>
          <HashLink to='#destination' smooth><img src={Dest3}  onClick={()=>setDestination('#1. The Metavists App')} className={destination==='#1. The Metavists App'? 'foregroundImg activeBox' : "foregroundImg"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest5} onClick={()=>setDestination('#2. Community Onboarding')} className={destination==='#2. Community Onboarding'? 'foregroundImgTwo activeBox' : "foregroundImgTwo"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest4} onClick={()=>setDestination('#3. Metavists Foundation')} className={destination==='#3. Metavists Foundation'? 'foregroundImgThree activeBox' : "foregroundImgThree"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest3} onClick={()=>setDestination('#4. The Metaverse')} className=
          {destination==='#4. The Metaverse'? 'foregroundImg activeBox' : "foregroundImg"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest2} onClick={()=>setDestination('#5. Metavists Media')} className={destination==='#5. Metavists Media'? 'foregroundImgTwo activeBox' : "foregroundImgTwo"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest6} onClick={()=>setDestination('#6. Metavists Holder Benefits')} className={destination==='#6. Metavists Holder Benefits'? 'foregroundImgThree activeBox' : "foregroundImgThree"} alt=''/></HashLink>
          <HashLink to='#destination' smooth><img src={Dest2} onClick={()=>setDestination('#7. Metavists Utility')} className={destination==='#7. Metavists Utility'? 'foregroundImgThree activeBox' : "foregroundImgThree"} alt=''/></HashLink>
        </div>
    </div>
          <div className='briefStorySection'  id='destination'>
          <div className='subSection'>
             <h1 className='briefStoryTitle'>{destination}</h1>
             <a className='knowMore'>{!showMore ?  <>Know more <FaAngleDown className='iconClass' onClick={()=>setShowMore(true)}/></> : <>Close <FaAngleUp className='iconClass' onClick={()=>setShowMore(false)}/></>}</a>
        
             <p className='briefStoryText'>
               {destination==='#2. Community Onboarding' ? 
               <>
               {showMore ? 
               <>
                   <ul>
                  <li>50% from the sales of NFT will go to supporting impactful nonprofits who are battling key UN Sustainable Development Goals </li>
                  <li>Nonprofits should also be committed to solving the problems plaguing the social impact world by joining our ecosystem in Metavists App</li>
                  <li>Goal: 150 Nonprofits & 100,000 donors</li>
                </ul>
               </> : <></>}
             
               </> 
               
               :
               
               destination==='#3. Metavists Foundation' ? 
               <>
               {showMore ? 
               <>
                <ul>
                  <li>The purpose of the Metavists Foundation is to be the Nonprofit Wing of the Metavists ecosystem to deploy funds to various nonprofits tackling key UN Sustainable goals </li>
                  <li>The forming of Metavists Nonprofit Foundation will play a key part in creating tax incentives for our communities & their philanthropy  </li>
                  <li>The Nonprofit foundation will be used to continuously fuel social impact projects, impactful nonprofits, & ...</li>
                </ul>
               </> : <></>}
             
            
               </> 
               :
               destination==='#4. The Metaverse' ? 
               <>
               {showMore ? 
               <>
                <ul>
                  <li>NFT Marketplace: Projects can adopt nonprofit through our ecosystem & auto-pledge their revenue or royalties to them. Projects can also track their social responsibility in-app</li>
                    <li>Purchasing decentralised Virtual Land for fundraising & other social impact effort</li>
                </ul>
               </> : <></>}
             
               </>
               :
               destination==='#5. Metavists Media' ? 
               <>
               {showMore ? 
               <>
                <ul>
                  <li>Comic / Animated Story lines to raise awareness to the public and bridge more fighters to our cause</li>
                </ul>
               </> : <></>}
              
               </>
               :
               destination==='#6. Metavists Holder Benefits' ? 
               <>
               {showMore ? 
               <>
                Governance
                <ul>
                  <li>Voting rights in Metavists Foundation for community decisions</li>
                </ul>
                Metavists In-App Utility
                <ul>
                  <li>Differentiated accounts in-app</li>
                  <li>Unlimited access to all accounts private space</li>
                  <li>Enhanced voting power for nonprofit’s ‘Donor Satisfaction’ metric</li>
                </ul>
               </> : <></>}
               
               </>
               :
               destination==='Metavists Utility' ? 
               <>
               {showMore ? 
               <>
                <ul>
                  <li>Early mint access for future drops in our ‘Metavists’ series (T&C applied)</li>
                  <li>IP Rights (Limited)</li>
                </ul>
               </> : <></>}
             
               </>
               :
               <>
                  {showMore ? 
                  <>
                      The Metavists App will be the world’s 1st social app for social impact that addresses multiple needs for the nonprofits and the problems that we, Metavists, hope to solve in the world of social impact.
                    <br/><br/>
                    We will have user-friendly tools to solve:
                    <ul>
                      <li>Corruption / Fraud</li>
                      <li>Lack of Transparency</li>
                      <li>Community Management</li>
                      <li>Monetization (Fiat & Cryptocurrency)</li>
                    </ul> 
                  </> : <></>}
                  
               </>}
            
             </p>
         </div>
         <div>
           <img className='roadmapStoryImg' src={destination==='#1. The Metavists App' ? Dest3 : Dest2}/>
         </div>
     </div>
     </>
  )
}

export default RoadmapHero