import React from "react";

const projects = [
  {
    name: "GratePlan",
    logo: "/assets/projects/grateplan-logo.png",
    description:
      "GratePlan is a website and app that helps home cooks manage their pantries.",
    details:
      "GratePlan is an intelligent cooking companion designed to streamline meal planning, ingredient management, and recipe discovery. It helps users track their pantry, generate shopping lists, and suggest meals based on available ingredients, ensuring they never overbuy or forget key items. With features like automated low-stock alerts, expiration tracking, and seamless integration between recipes and shopping lists, GratePlan eliminates kitchen guesswork. Whether you're a home cook or a meal prep enthusiast, it optimizes your workflow, making cooking more efficient, cost-effective, and enjoyable.",
    url: "https://grateplan.com",
  },
  {
    name: "CheaperStreamer",
    logo: "/assets/projects/CheaperStreamer-main.png",
    description:
      "CheaperStreamer is a website that helps viewers find a more affordable way to watch the shows, movies, and sports they love.",
    details:
      "CheaperStreamer is a streaming-cost optimizer designed to simplify subscription decisions and reduce unnecessary spending. It brings together what users want to watch, the teams they follow, their current services, and their viewing preferences to recommend a cost-effective setup for the next 30 days. By comparing streaming subscriptions, live TV, cable, bundles, and free options, it explains which services to keep, add, or drop and estimates potential savings. Recommendations account for location, ad preferences, video quality, and sports DVR needs, while clearly identifying coverage gaps. Whether you're cutting the cord or managing overlapping subscriptions, CheaperStreamer is designed to help you watch what you want and pay for what you need, with a free calculator that requires no account.",
    url: "https://cheaperstreamer.com",
  },
  {
    name: "Eightia",
    description:
      "Eightia is a collaborative storytelling concept, currently in the design phase, that aims to help friends, families, and communities preserve shared memories. Starting with a photo or a simple question, participants would contribute their recollections, with AI helping weave those perspectives into an evolving story. Planned features include shared timelines and exportable keepsakes, helping people remember more together than they could alone.",
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <img
                  className="project-logo"
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width="280"
                  height="280"
                />
              </a>
            )}
            <p>{project.description}</p>
            {project.details && <p>{project.details}</p>}
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
