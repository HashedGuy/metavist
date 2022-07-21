import { HashLink } from 'react-router-hash-link'
import {FaAngleRight} from 'react-icons/fa'
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
                <HashLink className="homeReferenceBtn" to={'./fablesMyths#backgroundStoryRef'}>Background story  <FaAngleRight className='iconClass'/></HashLink>
            </div>
            <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/HomePage_BriefStory_Pg5k_OoTm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658392433303' className='briefStoryImg'/>
        </div>
    )
}

export default BriefStory