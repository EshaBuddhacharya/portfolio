import { Link } from 'react-router-dom';
import './Hero.css'; 

function Hero() {
  return (
    <section className="hero-section">
      {/* Left Side - Content Box */}
      <div className="hero-left">
        <div className="content-box">
         <div className="hero-label">
  <img style={{width:"40px",height:"35px"}} src="/images/logo.png" alt="React Logo" className="react-logo" />
  <span className="file-name">Portfolio.jsx</span>
  <img src="/images/Macc.png" alt="React Logo" className="macc-logo" />
</div>
          <h1>&gt; Esha Buddhacharya</h1>
          <p className="highlight">&gt; Developer & Project Management Enthusiast</p>
          <p className="description">
            &gt; I believe that personal growth and continuous improvement are the greatest measures of success.
            I work with <span className="react">React</span> and <span className="mern">MERN </span> 
            and I am familiar with <span className="agile">Agile</span>, <span className="scrum">Scrum</span>, 
            and project management tools like Jira and Trello.
          </p>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <button>
            <Link to="/Contact">Contact</Link>
          </button>
          <button>
           <a href="/Eshacv.pdf" target="_blank" rel="noopener noreferrer" >
      Resume
      </a>
          </button>
        </div>
      </div>

      {/* Right Side - Sidebar */}
      <div className="hero-right">
        <div className="files">
          <Link to="/about" className="file-link">📄 about.js</Link>
          <Link to="/projects" className="file-link">📄 projects.js</Link>
          <Link to="/skills" className="file-link">📄 skills.js</Link>
          <Link to="/experience" className="file-link">📄 experience.js</Link>
          <img style={{width:"260px"}} src = "/images/Esha.png"/>
        </div>
        <div className="sidebar-footer">
          <p>💌 <a href="mailto:esha@example.com">esha@example.com</a></p>
          <p>🔗 <a href="https://linkedin.com/in/esha">LinkedIn</a></p>
          <p>🐙 <a href="https://github.com/esha">GitHub</a></p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
