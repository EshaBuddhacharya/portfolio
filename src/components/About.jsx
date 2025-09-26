import { Link } from "react-router-dom";
import './Hero.css'; // We'll define some colors here

function About() {
  return (
    <div className="about-container">
      <div className="grid-container">
        <div className="box">
      <Link to ="/Hero"> <img src ="/images/cross.png" className ="cross-skills"/></Link>

          <p>
            <span className="code-symbol">&gt;</span> I’m <span style ={{color:"skyblue", fontWeight:"500"}}>Esha Buddhacharya</span>, currently working as a{" "}
            <span className="keyword">Team Supervisor</span> at{" "}
            <span className="company">Maven Solutions</span>, an IT company and sister company of{" "}
            <span className="company">Agile Academy</span>. In this role, I lead a team, coordinate tasks, and ensure smooth workflow and communication. I manage client communications with US-based clients, handle error resolution, and oversee team hiring and offboarding. I also conduct LinkedIn outreach and lead generation, helping Agile Academy connect with potential students and expand its network. This experience has strengthened my <span className="keyword">leadership</span>, <span className="keyword">problem-solving</span>, and <span className="keyword">collaboration</span> skills.
          </p>

          <p>
            <span className="code-symbol">&gt;</span> Stepping out of our comfort zone is something I strongly believe in. Comparing ourselves to others only holds us back, so I focus on being better than I was yesterday. <span className="keyword">Self-belief</span> and <span className="keyword">continuous improvement</span> are the greatest measures of success, and they drive everything I do, both personally and professionally. I strive to combine my professional skills and growth mindset to make a meaningful impact in everything I pursue.
          </p>

          <p>
            <span className="code-symbol">&gt;</span> I strive to <span className="keyword">lead</span>, <span className="keyword">learn</span>, and <span className="keyword">grow</span> every day, turning ambition and dedication into tangible impact.
          </p>
        </div>

        <div className="box1">
          <img src="/images/EshaB.png" alt="Esha Buddhacharya" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
