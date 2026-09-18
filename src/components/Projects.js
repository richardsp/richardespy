import React from "react";

const projects = [
  {
    name: "GratePlan",
    logo: "/assets/projects/grateplan-logo.png",
    description:
      "A kitchen inventory and meal-planning tool that helps you keep track of what you have and plan what to cook next.",
    url: "https://grateplan.com",
  },
  {
    name: "CheaperStreamer",
    logo: "/assets/projects/CheaperStreamer-main.png",
    description:
      "A website that helps you optimize your streaming costs and spend less on the entertainment you enjoy.",
    url: "https://cheaperstreamer.com",
  },
  {
    name: "Eightia",
    description:
      "A collaborative memory-sharing platform concept that crowdsources your autobiography, bringing together stories and memories from the people who know you.",
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects" aria-label="Projects">
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h2 className="project-heading">{project.name}</h2>
            {project.logo && (
              <img
                className="project-logo"
                src={project.logo}
                alt={`${project.name} logo`}
                width="280"
                height="280"
              />
            )}
            <p>{project.description}</p>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit {project.name}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
