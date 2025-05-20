"use client";
import React, { createContext, ReactNode, useEffect, useState } from 'react'

type Education = {
  type: string;
  institution: string,
  degree: string,
  date: string,
  field: string,
};

type EducationContextType = {
  education: Education[];
  setEducation: (education: Education[]) => void;
};

export const EducationContext = createContext<EducationContextType>({
  education: [],
  setEducation: () => {}
});

type EducationProviderProps = {
  children: ReactNode;
};

function EducationProvider({children}: EducationProviderProps){
    const [education, setEducation] = useState<Education[]>([]);

    useEffect(() => {
            fetch('${process.env.NEXT_PUBLIC_BASE_PATH}/studies.json')
            .then(response => response.json())
            .then(datos => setEducation(datos))
            .catch(error => console.error('Error fetching data:', error));
        }, [])
    
    return (
        <EducationContext.Provider value={{ education, setEducation }}>
          {children}
        </EducationContext.Provider>
    )     
}

export default EducationProvider