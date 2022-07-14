import MainGuy from '../../../assets/img/mainGuy.png'
import Hermoine from '../../../assets/img/charJx.png'
import Weasley from '../../../assets/img/charBx.png'
import Luna from '../../../assets/img/charPx.png'
import backStoryImg from '../../../assets/img/final/FablesMyth_Backstory.png'
import BackgroundStory from './backgroundStory'

function Stories(props) {
  return (
    <>
    <div className='fmSpecialSection' id='charLetter'>
             <div className='subSection'>
                <h1 className='storyTitle'>{props.character}</h1>
           
                <p className='charInfoText'>
                {props.character==='NESSIE' ? 'Scientists all around the physical realm were warning humanity about disastrous consequences of hyper-consumerism. Oceans were slowly dying as one of the most important organisms co-existing in both realms was brought to extinction because non-profit organizations were mishandling funds and resources. And with precious coral reefs dying in both realms, the hybrids of the Nessie tribe were dying as well. That’s how Helena lost her parents and was left to take care of her younger brother who didn’t even learn to read yet.' :
                
                props.character==='Thunderbird M' ? 'While redwoods and coral reefs co-exist in a physical and hybrid realm, it is believed that the tribe of Thunderbird controls rain and thunder in both realms. Once the devastating forest wires burned the ancient redwoods in the hybrid realm, and industrial pollution together with the rise of temperatures destroyed coral reefs in the physical realm, it was only a matter of time when the air would become so polluted that even the intricate mechanism creating rain and thunder in the hybrid realm will come to a standstill. It was all because non-profit organizations that were supposed to implement new technology and use renewable resources in the physical realm didn’t receive allocated funds because their executives were secretly pocketing the money.' 
                
                :
                
                props.character==='BIG FOOT' ? 'Since his early childhood Kuafu was a strong kid. Some say stronger than most adults. His passion for hunting and fighting was apparent as soon as he could pick up and hold a tomahawk. Yet his father, a traditional village shaman, could never accept the fact that Kuafu had no interest in following his footsteps. He believed that his son’s destiny is to practice the ways of a tribal healer, but Kuafu was born a warrior, looking up to Bigfoot as a powerful, fearless legend that no one could ever defeat. Training in secrecy, mostly at night deep in redwoods near the village, Kuafu honed his skills as if he knew that he’ll soon have to use them to save his people.' : 
                
                <>There was a time when planet Earth and its realms were in perfect balance. Humans were in tune with their environment in the physical realm. Legends were praised by their trustworthy followers and new myths were created to honor them in the mythical realm. The order between realms was kept, and life had profound meaning on every level. It was all in place, like it was meant to be.
                <br/><br/>
                But the first signs of corruption started to show soon after humans discovered fire. It was obvious that this volatile, yet extraordinary species was holding some kind of key that opens the doors to other realms. Stuck between godliness and fear, human minds were always easy to manipulate, yet it was in their hearts where the real battle was taking hold. And in what seemed to be just a blink of time, the face of Earth was changed forever.</>}
                  
                </p>
            </div>
            <img src={props.character==='NESSIE' ? Hermoine : props.character==='Thunderbird M' ? Weasley : props.character==='BACKSTORY' ? backStoryImg : MainGuy} className='storyImg'/>
        </div>

      <div className='fmSpecialSection'>
      <div className='subSection order'>

        <p className='charInfoText'>
        {props.character==='NESSIE' ? 
        'Helena was a skilled empath capable of reading souls and hearts of others, feeling their pain and finding out their weaknesses. She was among the first hybrids who sensed that something was going terribly wrong in the physical realm. Since she lost her parents due to extinction of coral reefs in both realms, Helena wanted to save her fellow villagers from the same fate. Once the legend Nessie invited her to a party of heroes, Helena was humbled, but also afraid. She felt that so many humans are facing demise in the physical realm that it might be too late to rescue their hearts, but at least there might be a chance to protect her realm, and most importantly – her brother.' : 
        
        props.character==='Thunderbird M' ? 
        'When the Prime Council decided to send three heroes to the physical realm, Thunderbird legend knew there’s only one hybrid from his village who would be up to the challenge. He was a high achiever, ambitious student and one of the smartest scholars in the tribe. His face was always hidden under a cloak, his footsteps light and silent. His name was Corax, the winged assassin with a crossbow shooting lightning bolts.'
        
        : 
        
        props.character==='BIG FOOT' ? 'One night, Kuafu’s training was interrupted by a cloud of smoke coming from the dark. The redwoods, ancient organisms that co-exist in the physical and mythical realm, were on fire. Non-profit organization was paid off by corporations to give land preservation rights to sister companies, instead of indigenous tribes in the physical realm. These sister companies used sacred lands for illegal agribusiness that resulted in forest fires that also started to burn in the hybrid realm. And as Kuafu was watching the fire engulf the redwoods he loved and respected his entire life, he realized that the village was in danger and rushed back.' :
        <>
        Wars, famine, injustice and hatred began to dominate the physical realm. The corruption had a devastating effect on Earth’s biomes, because once humans lost their hearts - their minds quickly followed. Lands were ravaged and exploited beyond reason. The ecological viability of the whole planet swerved toward the edge of a precipice. Corruption was slowly spreading to the hybrid realm through unique hotspots connecting the Earth’s realms. As above, so below.
        <br/><br/>
        The destructive side of human nature was present since the dawn of time, which is why the wisest of people used to seek guidance from powerful mythical Legends in the hybrid realm. But even with their support, the most respected and enlightened spiritual leaders on Earth were losing the fight against the mystical force that captured and corrupted so many human hearts.
        </>}
        </p>
      </div>
      <img className='storyImg'/>
      </div>

      <div className='fmSpecialSection' >
      <div className='subSection'>

        <p className='charInfoText'>
        {props.character==='NESSIE' ? 
        'Helena grabbed her pearl spear without hesitation. Her ability to breathe underwater and exceptional diving speed allowed her to travel through the oceans of both realms. Her empathic skill was a valuable weapon, as she could connect to a human heart and cleanse it until it’s completely taken over by corruption. But nurturing her younger brother’s spirit was Helena’s top priority. She hoped that her absence from the hybrid realm would be brief, as she dreamed about returning to her village and spending time with her brother. In such dire times, he needed a strong role model to teach him not to hate humans and their actions which led to them losing their parents. ' :

        props.character==='Thunderbird M' ?
        'Thunderbird village was a part of a complex mountain biome far above the sea level (could be floating in the sky), overlooking the hybrid realm, and Corax grew up to be Thunderbird’s right hand. Learning how to operate the complex mechanism of rain and thunder in both realms, Corax gained a lot of knowledge about human behavior in the physical realm. That’s exactly why he never liked them. Only with the help from Thunderbird he learned to be patient and tolerant to human ways, yet he never truly accepted that their existence is as important as the existence of hybrids.'

        :
        
        props.character==='BIG FOOT' ? 'While saving his sleeping father from a hut just as flames reached the village, Kuafu’s face and right arm were severely burned. Even though his father used remedies and shamanic knowledge to heal the burns, the scars were permanent. Kuafu decided to use them as a scheme for tattoos that will always remind him of the night his life changed forever. When Bigfoot, the tribal legend that everyone worshiped, chose Kuafu to travel to the physical realm and fight corruption, Kuafu swore that his great strength and warrior spirit will always be on the right side.' :
        <>
          The Prime Council of the hybrid realm was urged to react when their hotspots stopped regenerating. Coral reefs, rainforests and hot springs were dying like a mirrored image of global annihilation in the human realm. In order to stop the source of dangerous corruption, the Prime Council chose three leaders of the biggest hybrid tribes to travel to the physical realm and investigate. These three mythical legends – Bigfoot, Thunderbird and Nessie – went on their way to face the unknown.  
        </>} 
        </p>
      </div>
      <img className='storyImg'/>
      </div>

      {props.character==='NESSIE' ? '' :
      <div className='fmSpecialSection' >
        <div className='subSection order'>

          <p className='charInfoText'>
            {props.character==='BIG FOOT' ? 
            'Kuafu’s father was aware that it was his son’s unmatched strength that saved him from the fire; if Kuafu listened to him and stayed away from his training, it could be that both of them would have died in the redwood fire. Still not accepting that his son might really be a hero, and even though he was afraid that he could easily become destructive in the physical realm under the influence of corruption, he gave an enchanted wolf headdress to Kuafu hoping it will keep his warrior spirit clean.' :

            props.character==='Thunderbird M' ? 
            'When it was time to embark on a dangerous journey to the physical realm, Thunderbird was well aware that the chosen one will be tempted to give up on corrupted humans. For this reason, the legend told Corax that he will watch every footstep through his eyes to make sure that his heart doesn’t go astray. From that moment Corax’s eyes had a blue glow every time Thunderbird was using them to look around. '
          : props.character==='NESSIE'?'' :
          <>
            Using unique hotspots to travel to the physical realm, the legends searched for the cause of destruction, only to discover that corruption has taken over hearts of human leaders, influencers and other people in power. Global mismanagement of resources and nonprofit corruption were just consequences of total absence of philanthropic values. Corrupted hearts were waging war against the whole human species. The trail of decay led to a government building taken over by a mysterious villain – The Whisperer.
            What The Whisperer has done to trap millions of human hearts was yet to be disclosed, but his manipulation was already tearing down the foundations of society in the physical realm. Once the Legends returned to the mythical realm, it was their duty to pick three promising warriors, one from each of their tribes. These hybrid heroes were then sent back to confront The Whisperer and bring the era of corruption to an end. But even their hybrid hearts, or at least traces of humanity left in them, could be susceptible to his fraudulence.
          </>}  </p>
        </div>
        <img className='storyImg'/>
      </div>}
</>
  )
}

export default Stories