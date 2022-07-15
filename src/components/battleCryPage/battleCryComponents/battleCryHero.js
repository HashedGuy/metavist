import bcHero from '../../../assets/img/final/BattleCry_Header.png'

function BattleCryHero(props) {
  return (
    <div className="homeHeroSection" ref={props.refG} id='heroRef'>
        <h1 className="heroTitle">Battle Cry</h1>
        <img src='https://ik.imagekit.io/74qyv5bswgr/Metavists/Battle_Cry___Header__cbVvy1l8C.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1657873425682' className="heroImg"/>
    </div>
  )
}

export default BattleCryHero