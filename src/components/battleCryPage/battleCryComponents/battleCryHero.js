import bcHero from '../../../assets/img/final/BattleCry_Header.png'

function BattleCryHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='heroRef'>
        <h1 className="heroTitle">Battle Cry</h1>
        <img src={bcHero} className="heroImg"/>
    </div>
  )
}

export default BattleCryHero