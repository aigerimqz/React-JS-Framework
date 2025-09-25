import "./About.css"
import instaIcon from "../../assets/icons/insta.png"
import facebookIcon from "../../assets/icons/facebook.png"
import telegramIcon from "../../assets/icons/telegram.png"
import tiktokIcon from "../../assets/icons/tiktok.png"
export default function About(){
    return (
    <>
    
    <div className="about__section">
        <h1 className="about__title">Enjoy your best travel ever</h1>
        <p className="about__text"><h1>About Us</h1> <br /> <hr className="about__line" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam molestias ipsam nesciunt laborum eum, vel blanditiis fuga saepe modi, pariatur mollitia cum? Eos dolor beatae aliquid incidunt recusandae excepturi!</p>
    </div>
    <div className="contact__section">
        <li>
            <a href="https:/instagram.com"><img src={instaIcon} alt="instagram" /></a>
            <a href="https:/www."><img src={facebookIcon} alt="facebook" /></a>
            <a href=""><img src={telegramIcon} alt="telegram" /></a>
            <a href=""><img src={tiktokIcon} alt="tiktok" /></a>
        </li>
        
        
    </div>
  
   
    </>
    )
}