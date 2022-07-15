import homeHero from '../../../assets/img/final/HomePage_Header.png'
function HomeHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='heroHome'>
        <h1 className="heroTitle">Metaverse Activists</h1>
        <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/Home_Page___Header__vV3w0vUGD.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1657873188294' className="heroImg"/>
    </div>
  )
}

export default HomeHero