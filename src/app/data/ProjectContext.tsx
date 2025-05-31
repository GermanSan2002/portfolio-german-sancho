"use client";
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Project = {
  title: string;
  title_esp: string;
  description_esp: string;
  description: string;
  imageUrl: string;
  sourceLink: string;
  demoLink: string;
  tags: string[];
};

type ProjectContextType = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
};

export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  setProjects: () => { }
});

type ProjectProviderProps = {
  children: ReactNode;
};

function ProjectProvider({ children }: ProjectProviderProps) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(datos => setProjects(datos))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  )
}


export default ProjectProvider