import './fablesMyths.css'
import '../homePage/home.css'
import StoryHero from './fablesMythsComponents/storyHero'
import { motion } from 'framer-motion'
import Footer from '../homePage/homeComponents/footer'

function FablesMyths() {
  
  return (
    <>
      <motion.div 

      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0 }}
      >
          <StoryHero/>
      </motion.div>
    
    </>
  )
}

export default FablesMyths