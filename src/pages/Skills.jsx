import { Link } from "react-router-dom";
function Skills()
{
    return(
         <div className ="contact-container">
            <div className =" skills-content">
                <Link to ="/Hero"> <img src ="/images/cross.png" className ="cross-skills"/></Link>
    <div className="skills-section">
  <h2>Skills</h2>

  <div className="skills-category">
    <h3>Tech skills</h3>
    <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>HTML & CSS</li>
      <li>Bootstrap</li>
      <li>Python</li>
      <li>MERN</li>
      <li>Figma</li>

    </ul>
  </div>

  <div className="skills-category">
    <h3>Soft skills</h3>
    <ul>
      <li>Communication</li>
      <li>Leadership</li>
      <li>Probelm Solving</li>
      <li>Adaptability</li>
    </ul>
  </div>

  <div className="skills-category">
    <h3>Tools</h3>
    <ul>
      <li>Trello</li>
      <li>Jira</li>
      <li>VS code</li>
      <li>Wordpress</li>
      <li>Jira</li>
      <li>Git</li>
    </ul>
  </div>

  <h2>Additional Skills</h2>
  <div className="skills-category">
    <ul>
      <li>Tarot Card Reading 🔮</li>
      <li>Nail Technician 💅</li>
    </ul>
  </div>
</div>

</div>
</div>
    )
}
export default Skills;