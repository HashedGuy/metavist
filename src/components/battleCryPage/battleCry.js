import React from 'react'
import BattleCryHero from './battleCryComponents/battleCryHero'
import '../homePage/home.css'
import './battleCry.css'
import FoundersMessage from './battleCryComponents/foundersMessage'
import ValuesOfMetavist from './battleCryComponents/valuesOfMetavist'

function BattleCry() {
  return (
    <>
        <BattleCryHero/>
        <FoundersMessage/>
        <ValuesOfMetavist title='Values of a Metavist'/>
        <ValuesOfMetavist title='Mission to Donors'/>
        <ValuesOfMetavist title='Mission to Nonprofits'/>
    </>
  )
}

export default BattleCry