import './fablesMyths.css'
import '../homePage/home.css'
import FablesMythsHero from './fablesMythsComponents/fablesMythsHero'
import Stories from './fablesMythsComponents/stories'
import NavigationMenu from '../navigation/navigationMenu'
import { useInView } from 'react-intersection-observer';

function FablesMyths() {
  const { ref: heroRef, inView: heroVisible} = useInView({threshold:.5})
  const { ref: strOneRef, inView: strOneVisible} = useInView({threshold:.5})
  const { ref: strTwoRef, inView: strTwoVisible} = useInView({threshold:.5})
  const { ref: strThreeRef, inView: strThreeVisible} = useInView({threshold:.5})
  const { ref: strFourRef, inView: strFourVisible} = useInView({threshold:.5})
  return (
    <>
       <div className="App">
      <NavigationMenu defaultActive='fablesMyths'/>
        <div className="dynamicSection">
        <div className='stickyNavContainer'>
          <div className={heroVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={strOneVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={strTwoVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={strThreeVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
          <div className={strFourVisible ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
        </div>
        <div className="pagesContent">
          <FablesMythsHero refG={heroRef}/>
          <Stories 
            firstParagraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
            secondParagraph='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
            refG={strOneRef}
          />
          <Stories 
            firstParagraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
            secondParagraph='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
            order='image'
            refG={strTwoRef}
          />
          <Stories 
            firstParagraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
            secondParagraph='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
            refG={strThreeRef}
          />
          <Stories 
            firstParagraph='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
            secondParagraph='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
            order='image'
            refG={strFourRef}
          />
         </div>
       </div>
      </div>
     
    </>
  )
}

export default FablesMyths