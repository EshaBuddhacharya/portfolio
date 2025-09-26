import { Link } from "react-router-dom";
function Contact()
{

 return(
    <>
    <div className ="contact-container">
    <div className =" contact-content">
       <Link to ="/Hero"> <img src ="/images/cross.png" className ="cross-contact"/></Link>
        <p className="description">
         <p className ="agile">&gt; 💌 <a className ="agile" href="mailto:eshabuddhacharya@gmail.com">eshabuddhacharya@gmail.com</a></p>
         <p className ="agile">&gt; 🔗 <a className ="agile"href="https://www.linkedin.com/in/esha-buddhacharya-097580267/">LinkedIn</a></p>
         <p className ="agile">&gt; 🐙 <a className ="agile"href="https://www.facebook.com/share/173UMb27Gh/?mibextid=wwXIfr">Facebook</a></p>
         <p className ="agile">&gt; 🐙 <a className ="agile"href="https://www.instagram.com/shhaa.aa__/">Instagram</a></p>
        </p>  
        <form action="https://formspree.io/f/xgvnvwzw" method="POST" className="contact-form">
  <input type="text" name="message" placeholder="Any message?" className="contact-input" />
  <button type="submit" className="send-button">Send</button>
</form>
    </div>
    </div>
    </>
 )
}
export default Contact;