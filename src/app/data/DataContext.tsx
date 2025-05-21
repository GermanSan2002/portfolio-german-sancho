import React, { ReactNode } from 'react';
import EducationProvider from './EducationContext';
import SkillProvider from './SkillsContext';
import ExperienceProvider from './ExperienceContext';
import { LanguageContext, LanguageProvider } from './LanguageContext';

type DataContextProps = {
  children: ReactNode;
};

function DataContext({children}: DataContextProps) {
  return (
    <LanguageProvider>
        <SkillProvider>
            <EducationProvider>
                <ExperienceProvider>
                    {children}
                </ExperienceProvider>
            </EducationProvider>
        </SkillProvider>
    </LanguageProvider>
  )
}

export default DataContext