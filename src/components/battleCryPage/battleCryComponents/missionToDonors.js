import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Mtd from '../../../assets/img/mtd.png'

function MissionToDonors(props) {
  const [box, setBox] = useState('')
  return (
    <div className='battleCrySection' ref={props.refG} id='mtdRef'>
        <div className='valuesSection'>
           <h1 className='valuesTitle'>Our Mission to You</h1>
             <div className='valuesBoxes'>
               {box==='' ? 
               <>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('one')}
                  >
                    Protecting your Donations
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('two')}>
                    Donation Impact and Satisfaction
                </div>

                <div 
                  className='valuesBox'
                  onClick={()=>setBox('three')}>
                    A Sense of Value
                </div>
                <div 
                  className='valuesBox'
                  onClick={()=>setBox('four')} >
                    Inspiration through Action
                </div>
               </>
               : 
               <>
                <div className='openBox'>
                  {box==='one' ? 
                  <>
                    <p>Nonprofits contribute to 41% of all corruption cases according to ACFE. Such stats have made the public highly skeptical and it has impacted sincere & impactful nonprofits. User friendly open-source transparency is key in fighting corruption & building trust. By holding a Metavists NFT, you will pave the way to easier public tracked donations. A new way to measure & review the impact donations hold all through the Metavists App. </p>
                  </>
                  :
                  box==='two' ? 
                <>
                  <p>Data & metrics are key factors for donors like you in evaluating the impact of your favourite social impact project.  This missing element must raise thoughts in the mind like, “Oh, you raised a million dollars but only fed five thousand?” Founders send investors updates monthly and we believe you deserve to be in that conversation as well. We Metavists want a future where every donor gets to feel the satisfaction of looking at the impact their donation made with a full heart. You deserve more than just a short shot of happiness at the moment of donation. By supporting the Metavists project, we will build a future where donations mean so much more than they do now.</p>
                </>
                :
                box==='three' ? 
                <>
                  <p>In the wide net of social media, it’s easy for content to get swept under the rug for the general public and it’s a shame to see such moving stories get buried. Which is why Creators & Influencers have gated content for the higher tier supportive community. We believe you deserve this too. You deserve to be involved with the behind-the-scenes, ground activity and more due your contribution. 
                  <br/><br/>
                  The Metavist will build the perfect platform for soc-impact orgs to connect with a tight knit community of donating supporters with exclusive content accessible only to donors.
                  </p>
                </>
                :
                <>
                  <p>There are a lot of promises made when it comes to donations. People spouting and throwing empty words to appease people then later journalists finding them to be untrue. You don’t deserve to be cheated in such a way.
                  <br/><br/>
                  In the Metavist App, no one can lie about the contributions they are making. The Giveprint is a simple yet innovative solution that tracks every cause and nonprofit you support on your profile. In the future, users can expect ranking among donors in a plethora of categories. Assuring that the lies and falsehoods of donations will come to an end.
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

export default MissionToDonors