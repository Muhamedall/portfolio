import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Page() {
  return (
    <section className="px-6 py-12  max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center sm:text-left mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {projects.map((project) => (
<ProjectCard key={project.id} {...project} />
))}

      </div>
    </section>
  );
}