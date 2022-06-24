import React from 'react'

function FoundersMessage(props) {
  return (
    <div className='briefStorySection' ref={props.refG}>
         <div className='messageSection'>
            <h1 className='briefStoryTitle'>Founder's Message</h1>
            <h2 className='titleh2'>Technology</h2>
            <p className='foundersMessageText'>
                Every revolution leaves the public service sector behind playing catch up with the private industry giants. Personally, I was frustrated by the lack of tech & innovation for the nonprofit world, after experiencing sophisticated startups solving the most minute discomfort of the business world. The need for efficiency was the driving force behind my startup journey, thus we are using tech for the 1st time to put the nonprofit world as the center of attraction instead as a feel-good edition to the social media world that revolves around sex & envy who integrate charities as a way to feel less guilty in their endless pursuit for distractions. 
            </p>

            <h2 className='titleh2'>Community </h2>
            <p className='foundersMessageText'>
                We believe community is the catalyst for good actions & transformation. Which is why we designed the solutions to the problem plaguing the nonprofit world around a social app. Communicate, interact, discuss & inspire. The Metavists app will be the Instagram for the nonprofit world with charities taking the roles of Influencers being sought for association, rather than Charities seeking influencers for exposure, as in every social app.
            </p>

            <h2 className='titleh2'>Monetization</h2>
            <p className='foundersMessageText'>
                Plenty of nonprofits spend a huge amount, sometimes up to 90% of the fundraising amount, to fundraise again. This is a mad never ending cycle. Imagine you knowing that only 10% of the money you donated is going back in their efforts to fundraise again. How will you feel? 
            </p>

            <h2 className='titleh2'>Democratise Capital</h2>
            <p className='foundersMessageText'>
                The Metavists App aims to cut the hassle & costs of fundraising through monthly subscriptions in both Fiat & Cryptocurrency to nonprofits. Nonprofits will be able to plan the impact roadmap better knowing what they will be receiving every month from generous donors and continue to spend most of their time making an impact for their mission.
            </p>
        </div>
        <img className='foundersMessageImg'/>
    </div>
  )
}

export default FoundersMessage