import React from 'react'
import './nav.css'

function StickyNavigation(props) {
  return (
    <div className='stickyNavContainer'>
        <div className={props.visibility ? 'verticalNavSection activeNavSection' : 'verticalNavSection'}></div>
        <div className={props.visibility ? 'verticalNavSection' : 'verticalNavSection activeNavSection'}></div>
        <div className='verticalNavSection'></div>
        <div className='verticalNavSection'></div>
    </div>
  )
}

export default StickyNavigation