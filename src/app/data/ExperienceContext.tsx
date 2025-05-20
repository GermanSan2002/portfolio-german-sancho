"use client";
import React, { createContext, ReactNode, useEffect, useState } from 'react'


type Experience = {
  date: string;
  title: string,
  subtitle: string,
  location: string,
  description: string,
  duration: string
};

type ExperienceContextType = {
  experience: Experience[];
  setExperience: (education: Experience[]) => void;
};

export const ExperienceContext = createContext<ExperienceContextType>({
  experience: [],
  setExperience: () => {}
});

type ExperienceProviderProps = {
  children: ReactNode;
};

function ExperienceProvider({children}: ExperienceProviderProps){
    const [experience, setExperience] = useState<Experience[]>([]);

    useEffect(() => {
            fetch('./experiences.json')
            .then(response => response.json())
            .then(datos => setExperience(datos))
            .catch(error => console.error('Error fetching data:', error));
        }, [])
    
    return (
        <ExperienceContext.Provider value={{ experience, setExperience }}>
          {children}
        </ExperienceContext.Provider>
    )     
}

export default ExperienceProvider