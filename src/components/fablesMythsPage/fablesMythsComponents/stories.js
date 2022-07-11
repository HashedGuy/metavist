import MainGuy from '../../../assets/img/mainGuy.png'
import Hermoine from '../../../assets/img/charJx.png'
import Weasley from '../../../assets/img/charBx.png'
import Luna from '../../../assets/img/charPx.png'
import Cedric from '../../../assets/img/charZx.png'

function Stories(props) {
  return (
    <>
    <div className='fmSpecialSection'>
             <div className='subSection'>
                <h1 className='storyTitle'>{props.character}</h1>
           
                <p className='charInfoText'>
                {props.character==='Nessie' ? 'Scientists all around the physical realm were warning humanity about disastrous consequences of hyper-consumerism. Oceans were slowly dying as one of the most important organisms co-existing in both realms was brought to extinction because non-profit organizations were mishandling funds and resources. And with precious coral reefs dying in both realms, the hybrids of the Nessie tribe were dying as well. That’s how Helena lost her parents and was left to take care of her younger brother who didn’t even learn to read yet.' :
                
                props.character==='Thunderbird M' ? 'While redwoods and coral reefs co-exist in a physical and hybrid realm, it is believed that the tribe of Thunderbird controls rain and thunder in both realms. Once the devastating forest wires burned the ancient redwoods in the hybrid realm, and industrial pollution together with the rise of temperatures destroyed coral reefs in the physical realm, it was only a matter of time when the air would become so polluted that even the intricate mechanism creating rain and thunder in the hybrid realm will come to a standstill. It was all because non-profit organizations that were supposed to implement new technology and use renewable resources in the physical realm didn’t receive allocated funds because their executives were secretly pocketing the money.' 
                
                : 'Since his early childhood Kuafu was a strong kid. Some say stronger than most adults. His passion for hunting and fighting was apparent as soon as he could pick up and hold a tomahawk. Yet his father, a traditional village shaman, could never accept the fact that Kuafu had no interest in following his footsteps. He believed that his son’s destiny is to practice the ways of a tribal healer, but Kuafu was born a warrior, looking up to Bigfoot as a powerful, fearless legend that no one could ever defeat. Training in secrecy, mostly at night deep in redwoods near the village, Kuafu honed his skills as if he knew that he’ll soon have to use them to save his people.'}
                  
                </p>
            </div>
            <img src={props.character==='Nessie' ? Hermoine : props.character==='Thunderbird M' ? Weasley : props.character==='Luna' ? Luna : MainGuy} className='storyImg'/>
        </div>

      <div className='fmSpecialSection' id='charLetter'>
      <div className='subSection order'>

        <p className='charInfoText'>
        {props.character==='Nessie' ? 
        'Helena was a skilled empath capable of reading souls and hearts of others, feeling their pain and finding out their weaknesses. She was among the first hybrids who sensed that something was going terribly wrong in the physical realm. Since she lost her parents due to extinction of coral reefs in both realms, Helena wanted to save her fellow villagers from the same fate. Once the legend Nessie invited her to a party of heroes, Helena was humbled, but also afraid. She felt that so many humans are facing demise in the physical realm that it might be too late to rescue their hearts, but at least there might be a chance to protect her realm, and most importantly – her brother.' : 
        
        props.character==='Thunderbird M' ? 
        'When the Prime Council decided to send three heroes to the physical realm, Thunderbird legend knew there’s only one hybrid from his village who would be up to the challenge. He was a high achiever, ambitious student and one of the smartest scholars in the tribe. His face was always hidden under a cloak, his footsteps light and silent. His name was Corax, the winged assassin with a crossbow shooting lightning bolts.'
        
        : 'One night, Kuafu’s training was interrupted by a cloud of smoke coming from the dark. The redwoods, ancient organisms that co-exist in the physical and mythical realm, were on fire. Non-profit organization was paid off by corporations to give land preservation rights to sister companies, instead of indigenous tribes in the physical realm. These sister companies used sacred lands for illegal agribusiness that resulted in forest fires that also started to burn in the hybrid realm. And as Kuafu was watching the fire engulf the redwoods he loved and respected his entire life, he realized that the village was in danger and rushed back.'}
        </p>
      </div>
      <img className='storyImg'/>
      </div>

      <div className='fmSpecialSection' >
      <div className='subSection'>

        <p className='charInfoText'>
        {props.character==='Nessie' ? 
        'Helena grabbed her pearl spear without hesitation. Her ability to breathe underwater and exceptional diving speed allowed her to travel through the oceans of both realms. Her empathic skill was a valuable weapon, as she could connect to a human heart and cleanse it until it’s completely taken over by corruption. But nurturing her younger brother’s spirit was Helena’s top priority. She hoped that her absence from the hybrid realm would be brief, as she dreamed about returning to her village and spending time with her brother. In such dire times, he needed a strong role model to teach him not to hate humans and their actions which led to them losing their parents. ' :

        props.character==='Thunderbird M' ?
        'Thunderbird village was a part of a complex mountain biome far above the sea level (could be floating in the sky), overlooking the hybrid realm, and Corax grew up to be Thunderbird’s right hand. Learning how to operate the complex mechanism of rain and thunder in both realms, Corax gained a lot of knowledge about human behavior in the physical realm. That’s exactly why he never liked them. Only with the help from Thunderbird he learned to be patient and tolerant to human ways, yet he never truly accepted that their existence is as important as the existence of hybrids.'

        : 'While saving his sleeping father from a hut just as flames reached the village, Kuafu’s face and right arm were severely burned. Even though his father used remedies and shamanic knowledge to heal the burns, the scars were permanent. Kuafu decided to use them as a scheme for tattoos that will always remind him of the night his life changed forever. When Bigfoot, the tribal legend that everyone worshiped, chose Kuafu to travel to the physical realm and fight corruption, Kuafu swore that his great strength and warrior spirit will always be on the right side.'} 
        </p>
      </div>
      <img className='storyImg'/>
      </div>

      {props.character==='Nessie' ? '' :
      <div className='fmSpecialSection' >
        <div className='subSection order'>

          <p className='charInfoText'>
            {props.character==='Thunderbird B' ? 
            'Kuafu’s father was aware that it was his son’s unmatched strength that saved him from the fire; if Kuafu listened to him and stayed away from his training, it could be that both of them would have died in the redwood fire. Still not accepting that his son might really be a hero, and even though he was afraid that he could easily become destructive in the physical realm under the influence of corruption, he gave an enchanted wolf headdress to Kuafu hoping it will keep his warrior spirit clean.' :

            props.character==='Thunderbird M' ? 
            'When it was time to embark on a dangerous journey to the physical realm, Thunderbird was well aware that the chosen one will be tempted to give up on corrupted humans. For this reason, the legend told Corax that he will watch every footstep through his eyes to make sure that his heart doesn’t go astray. From that moment Corax’s eyes had a blue glow every time Thunderbird was using them to look around. '
          :''}  </p>
        </div>
        <img className='storyImg'/>
      </div>}
</>
  )
}

export default Stories