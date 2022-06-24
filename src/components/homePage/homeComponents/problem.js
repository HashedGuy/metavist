import React, {useState} from 'react'
import {BsSearch, BsChevronDown, BsChevronUp} from 'react-icons/bs'

function Problem(props) {
    const [responseQ1, setResponseQ1] = useState(false)
    const [responseQ2, setResponseQ2] = useState(false)
    const [responseQ3, setResponseQ3] = useState(true)
  return (
    <div className='briefStorySection' ref={props.refG}>
             <div className='subSection'>
                <h1 className='briefStoryTitle'>PROBLEM WE SOLVE</h1>
           
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>
                            <BsSearch color='white' className='searchIcon'/>    When is the Mint Date?
                        
                        </div>
                        <a onClick={()=>setResponseQ1(!responseQ1)}>
                            {responseQ1 ? <BsChevronUp /> : <BsChevronDown/>}
                        </a>
                    </div>
                    {responseQ1 ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>
                            <BsSearch color='white' className='searchIcon'/>    How much it will cost?
                        
                        </div>
                        <a onClick={()=>setResponseQ2(!responseQ2)}>
                            {responseQ2 ? <BsChevronUp /> : <BsChevronDown/>}
                        </a>
                    </div>
                    {responseQ2 ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>
                            <BsSearch color='white' className='searchIcon'/>    How much it will cost?
                        
                        </div>
                        <a onClick={()=>setResponseQ3(!responseQ3)}>
                            {responseQ3 ? <BsChevronUp /> : <BsChevronDown/>}
                        </a>
                    </div>
                    {responseQ3 ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                     : ''}
                  
                </div>
              
            </div>
            <img className='briefStoryImg'/>
        </div>
  )
}

export default Problem