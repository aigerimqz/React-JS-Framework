export default function ContactItem(){
    const randomItem = Math.floor(Math.random()*10)+1;
    const user = `https://randomuser.me/api/?results=${randomItem}`;
    return(
        <>
        <div className="contact__item">
            <img className="contact__img"src="" alt="" />
            <h2 className="contact__info"></h2>
        </div>
        
        
        </>
    );

}