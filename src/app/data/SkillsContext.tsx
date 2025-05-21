"use client";
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Skill = {
  icono: string;
  titulo: string;
  title: string;
  descripcion: string;
  description: string;
};

type SkillsContextType = {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
};

export const SkillsContext = createContext<SkillsContextType>({
  skills: [],
  setSkills: () => {}
});

type SkillProviderProps = {
  children: ReactNode;
};

function SkillProvider({children}: SkillProviderProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  
  useEffect(() => {
        fetch('/skills.json')
        .then(response => response.json())
        .then(datos => setSkills(datos))
        .catch(error => console.error('Error fetching data:', error));
    }, [])

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  )
}

export default SkillProvider