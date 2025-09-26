import "./About.css"
import instaIcon from "../../assets/icons/insta.png"
import facebookIcon from "../../assets/icons/facebook.png"
import telegramIcon from "../../assets/icons/telegram.png"
import tiktokIcon from "../../assets/icons/tiktok.png"
import locationIcon from "../../assets/icons/location.png"
import bookingIcon from "../../assets/icons/booking.png"
import serviceIcon from "../../assets/icons/service.png"
export default function About(){
    return (
    <>
    
    <div className="about__section">
        <div className="about__left">
            <h1 className="about__title">Enjoy your best travel ever</h1>
            <p className="about__text"><h1>About Us</h1> <br />  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam molestias ipsam nesciunt laborum eum, vel blanditiis fuga saepe modi, pariatur mollitia cum? Eos dolor beatae aliquid incidunt recusandae excepturi!</p>
        </div>
        <div className="about__right">

        </div>
        
    </div>
    <div className="info__section">
        <div className="info__item">
            <img src={locationIcon} alt="" />
            <div className="info__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
        <div className="info__item">
            <img src={bookingIcon} alt="" />
            <div className="info__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
        <div className="info__item">
            <img src={serviceIcon} alt="" />
            <div className="info__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error sed esse quibusdam</p>
                <a href="">More detailed →</a>
            </div>
            
        </div>
    </div>
    <div className="contact__section">
        <hr className="contact__line"/>
        <li>
            <a className="contact__item" href="https:/instagram.com"><img src={instaIcon} alt="instagram" /></a>
            <a className="contact__item" href="https:/www."><img src={facebookIcon} alt="facebook" /></a>
            <a className="contact__item" href=""><img src={telegramIcon} alt="telegram" /></a>
            <a className="contact__item" href=""><img src={tiktokIcon} alt="tiktok" /></a>
        </li>
        <hr className="contact__line"/>
        
    </div>
  
   
    </>
    )
}