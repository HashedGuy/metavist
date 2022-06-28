import React, {useState} from 'react'
import {BsSearch, BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'

function Problem(props) {
    const [response, setResponse] = useState('three')
    const [responseQ2, setResponseQ2] = useState(false)
    const [responseQ3, setResponseQ3] = useState(true)
  return (
    <div className='briefStorySection' ref={props.refG} id='problemRef'>
             <div className='subSection'>
                <h1 className='briefStoryTitle'>PROBLEM WE SOLVE</h1>
           
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>
                            <BsSearch color='white' className='searchIcon'/>    When is the Mint Date?
                        
                        </div>
                        {response==='one' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp /></a> : 
                        <a onClick={()=>setResponse('one')}><BsChevronDown /></a>}
                    </div>
                    {response==='one' ? 
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
                        {response==='two' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp /></a> : 
                        <a onClick={()=>setResponse('two')}><BsChevronDown /></a>}
                    </div>
                    {response==='two' ? 
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
                        {response==='three' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp /></a> : 
                        <a onClick={()=>setResponse('three')}><BsChevronDown /></a>}
                    </div>
                    {response==='three' ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <HashLink className="homeReferenceAnchor" to={'./battleCry#bcId'}>Wanna know more? Check out our Battle Cry</HashLink>
              
            </div>
            <div className='problemImg'>
                {response==='one' ? '1' : response==='two' ? '2' : '3'}
            </div>
        </div>
  )
}

export default Problem