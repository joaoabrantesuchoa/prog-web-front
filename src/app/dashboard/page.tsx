"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import { getProjectFromUserId } from "../api/route";

type ProjectDashboardProps = object;

const ProjectDashboard: React.FC<ProjectDashboardProps> = () => {
  const [projects, setProjects] = useState<
    { id: number; titulo: string; descricao: string; professorId: number }[]
  >([]);

  console.log({ projects });

  useEffect(() => {
    const fetchProjects = async () => {
      const userId = localStorage.getItem("userId");

      if (userId) {
        try {
          const projectList = await getProjectFromUserId(Number(userId));
          setProjects(projectList); 
        } catch (error) {
          console.error("Erro ao buscar projetos:", error);
        }
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-wrap border border-solid bg-stone-100 border-neutral-500">
      <Sidebar />
      <main className="flex flex-col grow shrink-0 self-start basis-0 w-full">
        <Header />
        <section className="flex flex-col mt-12 ml-5 w-full max-w-[964px] max-md:mt-10 max-md:max-w-full">
          <SearchBar />
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDashboard;
