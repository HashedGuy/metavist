import Founder from '../../../assets/img/founder.png'

function FoundersMessage(props) {
  return (
    <div className='briefStorySection' ref={props.refG} id='fmRef'>
         <div className='messageSection'>
            <h1 className='briefStoryTitle'>Founder's Message</h1>
            <h2 className='titleh2'>Technology</h2>
            <p className='foundersMessageText'>
                Every revolution leaves the public service sector behind playing catch up with the private industry giants. Personally, I was frustrated by the lack of tech & innovation for the nonprofit world. 
            </p>

            <h2 className='titleh2'>Community </h2>
            <p className='foundersMessageText'>
                We believe community is the catalyst for good actions & transformation. Which is why we designed the solutions to the problem plaguing the nonprofit world around a social app. 
            </p>

            <h2 className='titleh2'>Monetization</h2>
            <p className='foundersMessageText'>
                Plenty of nonprofits spend a huge amount, sometimes up to 90% of the fundraising amount, to fundraise again. This is a mad never ending cycle. Imagine you knowing that only 10% of the money you donated is going back in their efforts to fundraise again. How will you feel? 
            </p>

            <h2 className='titleh2'>Democratise Capital</h2>
            <p className='foundersMessageText'>
                The Metavists App aims to cut the hassle & costs of fundraising through monthly subscriptions in both Fiat & Cryptocurrency to nonprofits. 
            </p>
        </div>
        <img src={Founder} className='foundersMessageImg'/>
    </div>
  )
}

export default FoundersMessage