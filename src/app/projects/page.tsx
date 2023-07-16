import React from "react";
import { projects } from "../config/projectDetails";
import photographySite from "../../../public/images/photography-site-square.png";
import margesBar from "../../../public/images/marges-bar-square.png";
import cardSharks from "../../../public/images/Screenshot 2023-01-13 093333.png";

export default function ProjectsPage() {
  return (
    <div className="flex items-center flex-col w-full">
      <h2 className="font-bold text-3xl mb-2">PROJECTS</h2>
      <div className="flex flex-col items-center md:max-w-3xl lg:max-w-5xl">
        {projects.map((project) => (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
