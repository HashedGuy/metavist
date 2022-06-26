import React from 'react'
import NavigationMenu from '../navigation/navigationMenu'
import StoryHero from './storyComponents/storyHero'
import './story.css'
import '../homePage/home.css'

function Story() {
  return (
    <div className="App" id='homeId'>
      <NavigationMenu defaultActive='home'/>
      <div className="dynamicSection">
       
       <div className="pagesContent">
         <StoryHero/>
       </div>
      </div>
     </div>
  )
}

export default Story