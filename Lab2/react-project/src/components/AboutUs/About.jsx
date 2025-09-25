import "./About.css"
import ContactItem from "./ContactItem"
export default function About(){
    return (
    <>
    
    <div className="about__section">
        <h1 className="about__title">Enjoy your best travel ever</h1>
        <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quibusdam molestias ipsam nesciunt laborum eum, vel blanditiis fuga saepe modi, pariatur mollitia cum? Eos dolor beatae aliquid incidunt recusandae excepturi!</p>
    </div>
    <div className="team__section">
        <h1>Meet the team</h1>
        <ContactItem></ContactItem>
    </div>
  
   
    </>
    )
}