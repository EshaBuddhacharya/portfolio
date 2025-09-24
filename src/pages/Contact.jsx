import { Link } from "react-router-dom";
function Contact()
{

 return(
    <>
    <div className ="contact-container">
    <div className =" contact-content">
       <Link to ="/Hero"> <img src ="/images/cross.png" className ="cross-contact"/></Link>
        <p className="description">
         <p className ="agile">&gt; 💌 <a className ="agile" href="mailto:esha@example.com">eshabuddhacharya@gmail.com</a></p>
         <p className ="agile">&gt; 🔗 <a className ="agile"href="https://linkedin.com/in/esha">LinkedIn</a></p>
         <p className ="agile">&gt; 🐙 <a className ="agile"href="https://github.com/esha">Facebook</a></p>
         <p className ="agile">&gt; 🐙 <a className ="agile"href="https://github.com/esha">Instagram</a></p>
        </p>  
        <form>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="textarea"
            placeholder="Any message?"
            className="contact-input"
          />
          <button type="submit" className="send-button">Send</button>
        </form>
        </form>
    </div>
    </div>
    </>
 )
}
export default Contact;