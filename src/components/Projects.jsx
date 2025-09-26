import React from "react";
import { Link } from "react-router-dom";


const projects = [
   {
  title: "Daily Report Management System (In Progress)",
  description: "Developing a system for Maven Solutions to track daily work reports, task progress, and team performance. Currently building core modules and UI.",
  image: "/images/comingsoon.png" // placeholder image
},
  
  {
    title: "Food Ordering System",
    description: "Deployed full-stack food ordering system using MERN, featuring login, product listing, cart, and checkout.",
    link: "https://bajra.onrender.com/",
    image: "/images/bajra.png"
  },
  {
    title: "Trello Board",
    description: "Organized tasks for the Food Ordering System project using Trello with backlog, in progress, and done columns.",
    image: "/images/trello.png"
  },
  {
    title: "Jira Board",
    description: "Tracked development workflow using Jira with issue management and sprint boards.",
    image: "/images/jira.png"
  }
];

function Projects() {
  return (
    <section className="projects-section">
        <Link to ="/Hero"> <img src ="/images/cross.png" className ="cross-skills"/></Link>

      <h2>Projects & Project Management</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            {proj.image && <img src={proj.image} alt={`${proj.title} screenshot`} className="project-img"/>}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
