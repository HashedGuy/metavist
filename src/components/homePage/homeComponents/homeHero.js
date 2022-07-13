import homeHero from '../../../assets/img/final/HomePage_Header.png'
function HomeHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='heroHome'>
        <h1 className="heroTitle">Metaverse Activists</h1>
        <img src={homeHero} className="heroImg"/>
    </div>
  )
}

export default HomeHero