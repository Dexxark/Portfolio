import { useState } from "react";
import dataProject from "../data/dataProjects.json";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const [projectsToShow, setProjectsToShow] = useState(6);
  const allProjects = dataProject;

  return (
    <section
      data-section
      id="projects"
      className="m-auto -my-14 max-w-[1250px] px-5 py-14 md:-my-20 md:px-6 md:py-20 lg:-my-24 lg:px-12 lg:pt-24"
    >
      <h2 className="mb-10 mt-[72px] font-kaushan text-3xl text-gray-dark md:mb-12 md:text-[2.4rem] lg:mb-[60px] lg:mt-28">
        Mes Projets
      </h2>
      <div
        className="grid gap-x-8 gap-y-10 transition-transform duration-[1200ms] ease-in-out will-change-transform md:grid-cols-2 md:duration-[1000ms] lg:grid-cols-2 translate-x-0"
      >
        {allProjects.slice(0, projectsToShow).map((data, id) => (
          <ProjectCard key={id} img={data.img} title={data.title} description={data.description} skill={data.skill} github={data.github} id={id} />
        ))}
      </div>
    </section>
  );
};

export default Project;