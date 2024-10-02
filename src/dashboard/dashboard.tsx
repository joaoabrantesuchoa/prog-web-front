import React, { useEffect, useState } from "react";
import { getAllProjects } from "../api";

export interface Project {
  id: number;
  titulo: string;
  descricao?: string; 
  professorId: number;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]); 

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projetos</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
