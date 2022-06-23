import React from 'react'

function Stories(props) {
  return (
    <div className='briefStorySection'>
             <div className={props.order==='image' ? 'subSection order' : 'subSection'}>
                <h1 className='storyTitle'>Fables & Myths</h1>
           
                <p className='storyText'>
                    {props.firstParagraph}
                    <br/><br/>
                    {props.secondParagraph}
                </p>
            </div>
            <img className='briefStoryImg'/>
        </div>
  )
}

export default Stories