// src/app/projects/page.tsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Page() {
  return (
    <section className="px-6 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-8">Projects</h1>
      <div className="flex flex-wrap gap-6 ">
  {projects.map(({ key, ...project }) => (
    <ProjectCard key={key} {...project} />
  ))}
</div>

    </section>
  );
}
