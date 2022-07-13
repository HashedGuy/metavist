import { HashLink } from 'react-router-hash-link'
import bsImg from '../../../assets/img/final/HomePage_BriefStory.png'

function BriefStory(props) {
    return (
        <div className='briefStorySection' ref={props.refB} id='bsRef'>
             <div className='subSection'>
                <h1 className='briefStoryTitle'>BRIEF STORY</h1>
           
                <p className='briefStoryText'>
                    This is a story of the mythical legends we heard from ancient cultures & civilizations for thousands of years. Yes, they are true! They were entrusted to rise when humanity fails to preserve Earth & Her people.
                    <br/><br/>
                    However, the LOM does not believes humanity failed because we did not care. But we failed because the system through which we ‘care’ is broken beyond repair.
                </p>
                <HashLink className="homeReferenceBtn" to={'./fablesMyths#backgroundStoryRef'}>Background story</HashLink>
            </div>
            <img src={bsImg} className='briefStoryImg'/>
        </div>
    )
}

export default BriefStory