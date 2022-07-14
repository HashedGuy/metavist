import { useState } from 'react'
import {BsSearch, BsChevronDown, BsChevronUp} from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link'
import ProblemImg from '../../../assets/img/final/HomePage_Probs.png'
import ProblemImg0 from '../../../assets/img/final/Homepage_Probs0.png'
import ProblemImg1 from '../../../assets/img/final/Homepage_Probs1.png'
import ProblemImg2 from '../../../assets/img/final/Homepage_Probs2.png'

function Problem(props) {
    const [response, setResponse] = useState('three')
    const [responseQ2, setResponseQ2] = useState(false)
    const [responseQ3, setResponseQ3] = useState(true)
  return (
    <div className='briefStorySection' ref={props.refG} id='problemRef'>
             <div className='subSection'>
                <h1 className='briefStoryTitle'>THE WORLD NEEDS YOU TODAY!</h1>
           
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>   Fight Fraud & Corruption
                        
                        </div>
                        {response==='one' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp className='iconClass'/></a> : 
                        <a onClick={()=>setResponse('one')}><BsChevronDown className='iconClass'/></a>}
                    </div>
                    {response==='one' ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p className='briefStoryText'>
                            The number 1 culprit halting our progress!
                                <ul>
                                    <li>ACFE reports that 41% of all corruption cases & 15% of all fraud is from nonprofits. That’s whack!</li>
                                    <li>ACFE also reports that $639,000 is the average loss!</li>
                                </ul>
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>  Making Philanthropy Accountable & Trustworthy
                        
                        </div>
                        {response==='two' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp className='iconClass'/></a> : 
                        <a onClick={()=>setResponse('two')}><BsChevronDown className='iconClass'/></a>}
                    </div>
                    {response==='two' ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p className='briefStoryText'>
                                <ul>
                                    <li>Only 52 % of Americans have faith that nonprofits will ‘do what is right’ [2020 Edelman Trust Barometer].. I don’t blame em</li>
                                    <li>58% of the public feel there is a lack of transparency.  I mean, why will they not feel this way?</li>
                                </ul>
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <div className='questionBox'>
                    <div className='questionPart'>
                        <div className='questionLeft'>
                          Democratise & Revolutionise Capital Flow
                        
                        </div>
                        {response==='three' ? 
                        <a onClick={()=>setResponse('')}> <BsChevronUp className='iconClass'/></a> : 
                        <a onClick={()=>setResponse('three')}><BsChevronDown className='iconClass'/></a>}
                    </div>
                    {response==='three' ? 
                        <div className='responseBox'>
                            <hr className='hrStyle'/>
                            <p className='briefStoryText'>
                                <ul>
                                    <li>Big, ineffective nonprofits are major beneficiaries of the current USD $500 bn philanthropy market. Let’s flow this capital to small & impactful nonprofits too!</li>
                                    <li>Crypto holders are more generous & open to innovation. Let’s prove em right!</li>
                                </ul>
                            </p>
                        </div>
                     : ''}
                  
                </div>
                <HashLink className="homeReferenceAnchor" to={'./battleCry#bcId'}>Wanna know more? Check out our Battle Cry</HashLink>
              
            </div>
           
                <img src={ response==='one' ? ProblemImg0 : response==='two' ? ProblemImg1 : response==='three' ? ProblemImg2 : ProblemImg} className='problemImg'/>
         
        </div>
  )
}

export default Problem