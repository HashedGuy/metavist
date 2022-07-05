import { useState } from 'react'
import smth from '../../../assets/img/vom.png'

function HolderBenefits(props) {
    const [open, setOpen] = useState('')
    console.log(open)
  return (
  
    <div className='valuesSection' style={{color: 'white', marginLeft: '2.5em'}} ref={props.refG} id='mhbRef'>
       <h1 className='valuesTitle'>Experimental</h1>
       <div className='edition'>
        <div className={open==='one' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='one' ? '' : <div className="centered" onClick={()=>setOpen('one')}>Intelligence</div>}
                <img src={smth} className={open==='one' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='one' ? 
                <>
                <p className='openedBoxText'>You run on data and metrics. Realising the impact of an organisation lies in more than how it is marketed and the legacy it holds.</p>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
                
            
            </div>
            <div className={open==='two' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='two' ? '' : <div className="centered" onClick={()=>setOpen('two')}>Vision</div>}
                <img src={smth} className={open==='two' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='two' ? 
                <>
                <p className='openedBoxText'>You believe bold ideas are the road to a brighter future. Blazing a path of your very own.</p>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
            <div className={open==='three' ? 'openedBenefitCard' : 'benefitCard'} >
                {open==='three' ? '' : <div className="centered" onClick={()=>setOpen('three')}>Generosity</div>}
                <img src={smth} className={open==='three' ? 'coverImg smaller' : 'coverImg'}/>
                {open==='three' ? 
                <>
                <p className='openedBoxText'>You take heed in the idea that we are not what we take but what we give. Eager to share your knowledge and experience with others.</p>
                <a className='closeBtn' onClick={()=>setOpen('')}>Close</a>
                </> : ''}
            </div>
       </div>
   
    </div>
 
     
  
  )}

export default HolderBenefits