import React from 'react'
import HomeHero from './homeComponents/homeHero'
import './home.css'
import BriefStory from './homeComponents/briefStory'
import Character from './homeComponents/character'
import Problem from './homeComponents/problem'

function Home() {
  return (
    <>
        <HomeHero/>
        <BriefStory/>
        <Character />
        <Problem />
    </>
  )
}

export default Home