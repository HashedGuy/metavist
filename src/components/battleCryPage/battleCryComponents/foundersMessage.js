import Founder from '../../../assets/img/final/BattleCry_Carcass.png'
import FounderOne from '../../../assets/img/final/BattleCry_Carcass1.png'
import FounderTwo from '../../../assets/img/final/BattleCry_Carcass2.png'

function FoundersMessage(props) {
  return (
    <div className='battleCrySection' ref={props.refG} id='fmRef'>
         <div className='messageSection'>
            <h1 className='briefStoryTitle'>The Carcass in Public</h1>
            <div className='carcassSections'>
                <div>
                <p className='foundersMessageText'>
                    Remember a time where you wanted to donate to something? Whether it be to help those in need or maybe support a cause you feel strongly about. You most likely felt proud that your money was going towards a good cause, but there is always that feeling of what is my money going towards exactly?
                </p>

                {/* <h2 className='titleh2'>Community </h2> */}
                <p className='foundersMessageText'>
                    That is the exact situation Elon Musk found himself in when he claimed on Twitter he would give the United Nations World Food Programme six billion US Dollars to solve world hunger. Elon wanted nothing more than to know that his money was secure and going into exactly what he was donating towards. He asked for nothing more than to feel valued and be given the transparency he deserved.
                </p>
                </div>
           
                <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/BattleCry_Carcass_yapcLSY2o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392168829' className='foundersMessageImg'/>
            </div>
            <div className='carcassSections'>
                <div className='orderChange'>
                    <p className='foundersMessageText'>
                        We don’t all have Six Billion US Dollars lying around for our pleasure. Yet our expectations fall in line with even the richest of people in our economy. We want our money treated with the respect it deserves. 
                    </p>

                    {/* <h2 className='titleh2'>Democratise Capital</h2> */}
                    <p className='foundersMessageText'>
                        Why are we, the working class, donating a sum of five hundred billion annually subjected to the rigorous game that is the current state of nonprofits.  
                    </p>
                </div>
                <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/BattleCry_Carcass1_xL8Zs-_Ry.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392166836' className='foundersMessageImg'/>
            </div>
         

         <div className='carcassSections'>
             <div>
             <p className='foundersMessageText'>
                    This should be an aggravating point for everyone. We know it is for us. We are the Metavists (Metaverse Activists) and we will work to restore the trust of the people and extinguish the flames of greed perpetrating the nonprofit world with our NFT Collections. Building a community of the most committed individuals to invest and build the ideal future. All this done in the palm of the hand from our Metavists App.
                </p>
             </div>
             <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/BattleCry_Carcass2_xujrfZN55.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392168835' className='foundersMessageImg'/>
         
         </div>
          
           
        </div>
     
    </div>
  )
}

export default FoundersMessage