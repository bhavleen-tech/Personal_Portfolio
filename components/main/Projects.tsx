import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/blog.png"
          title="The Thought Post - A Blogging Web Application"
          description="Built a feature-rich blogging website using the MERN stack, combining responsive design with efficient backend APIs to
deliver fast, dynamic, and user-friendly content management"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Gate Entry System"
          description="A digital gate entry system designed for Guru Tegh Bahadur Institute of Technology to streamline form submissions for admissions, alumni, vendors, parents, and others."
        />
        <ProjectCard
          src="/clone.jpg"
          title="Netflix Clone"
          description="Developed a visually engaging front-end clone of the Netflix landing page using pure HTML and CSS, replicating the official
 UI layout, design aesthetics, and responsive elements."
        />
      </div>
    </div>
  );
};

export default Projects;