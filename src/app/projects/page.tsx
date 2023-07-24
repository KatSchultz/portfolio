import React from "react";
import Image from "next/image";
import { projects } from "../config/projectDetails";
import photographySite from "../../../public/images/photography-site-square.png";
import margesBar from "../../../public/images/marges-bar-square.png";
import cardSharks from "../../../public/images/card-sharks-square.png";
import portfolio from "../../../public/images/portfolio-square.png";

const projectImage = (name: string) => {
  switch (name) {
    case "Photography Site":
      return photographySite;
    case `Marge's Bar`:
      return margesBar;
    case "Card Sharks":
      return cardSharks;
    case "My Portfolio":
      return portfolio;

    default:
      return photographySite;
  }
};

export default function ProjectsPage() {
  return (
    <div className="flex items-center flex-col w-full">
      <h2 className="font-bold text-3xl mb-4">PROJECTS</h2>
      <div className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl">
        {projects.map((project) => (
          <section
            key={project.name}
            className="flex flex-col md:flex-row mb-2"
          >
            <div className="min-w-1/2 flex justify-start md:justify-end p-2">
              <Image
                src={projectImage(project.name)}
                className="shadow-lg"
                alt={`Screenshot of ${project.name}`}
                width={400}
                height={400}
              ></Image>
            </div>
            <div className="project-text flex flex-col items-start justify-center p-2">
              <h3 className="font-bold text-xl mb-2">{project.name}</h3>
              <p className="pb-2">{project.description}</p>
              <div className="links flex  text-my-teal font-bold">
                <a
                  href={project.githubLink}
                  className="pr-4  visited:text-purple-800 "
                >
                  View GitHub
                </a>
                <a href={project.liveLink} className=" visited:text-purple-800">
                  View Live
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
