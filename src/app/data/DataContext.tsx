import React, { ReactNode } from 'react';
import EducationProvider from './EducationContext';
import SkillProvider from './SkillsContext';
import ExperienceProvider from './ExperienceContext';
import { LanguageContext, LanguageProvider } from './LanguageContext';
import ProjectProvider from './ProjectContext';

type DataContextProps = {
  children: ReactNode;
};

function DataContext({ children }: DataContextProps) {
  return (
    <LanguageProvider>
      <ProjectProvider>
        <SkillProvider>
          <EducationProvider>
            <ExperienceProvider>
              {children}
            </ExperienceProvider>
          </EducationProvider>
        </SkillProvider>
      </ProjectProvider>
    </LanguageProvider>
  )
}

export default DataContext