import React, { useState } from "react";
import { Link } from "react-router-dom";

function Experience() {
  const experiences = [
    {
      title: "Team Supervisor — Maven Solutions",
      date: "Dec 2024 - Present",
      description: [
        "Supervised and trained a remote team at <span class='company'>Maven Solutions</span>.",
        "Managed client communication and onboarding.",
        "Monitored work, identified errors, and gave feedback.",
        "Reported performance updates to leadership."
      ]
    },
    {
      title: "Deputy Campus Director — Hult Prize at IMS",
      date: "Sep 2024 - Feb 2025",
      description: [
        "Organized competition logistics and student outreach.",
        "Guided student teams and refined business ideas.",
        "Served as MC for smooth event flow."
      ]
    },
    {
      title: "Lead Content Creator — Hult Prize at IMS",
      date: "Sep 2023 – Feb 2024",
      description: [
        "Produced and managed promotional content.",
        "Boosted event visibility and participation."
      ]
    },
    {
      title: "Private Tutor & Teacher",
      date: "2018 - 2024",
      description: [
        "Developed lesson plans and guided students.",
        "Monitored progress and adjusted teaching methods."
      ]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle description on mobile
  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experience-container">
      <div className="experience-content">
        <Link to="/Hero">
          <img src="/images/cross.png" className="cross-experience" alt="Close" />
        </Link>
        <h2 className="experience-header">Professional Experience</h2>
        <div className="cards-container">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
              onClick={() => handleCardClick(index)}
            >
              <h3 className="job-title">{exp.title}</h3>
              <p className="job-date">{exp.date}</p>

              {/* Description toggled for mobile */}
              <ul
                className={`description-list ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="job-desc"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
