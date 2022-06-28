import Mountain from '../../../assets/img/animeMap.png'
import Tree from '../../../assets/img/dest1.png'
import Dest2 from '../../../assets/img/dest2.png'
import Dest3 from '../../../assets/img/dest3.png'

function RoadmapHero(props) {
  return (
    <div className='roadmap'>
      <img src={Tree} className="foregroundImg" alt=''/>
      <img src={Dest2} className="foregroundImgTwo" alt=''/>
      <img src={Dest3} className="foregroundImgThree" alt=''/>
      <img src={Tree} className="foregroundImg" alt=''/>
      <img src={Dest2} className="foregroundImgTwo" alt=''/>
      <img src={Dest3} className="foregroundImgThree" alt=''/>
    </div>
  )
}

export default RoadmapHero