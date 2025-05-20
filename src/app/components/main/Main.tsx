import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Perfil from '../perfil/Perfil'
import Skills from '../skills/Skills'
import SkillProvider from '@/app/data/SkillsContext'
import ResumeSection from '../resume/Resume'
import ExperienceProvider from '@/app/data/ExperienceContext'
import EducationProvider from '@/app/data/EducationContext'

function Main() {
  return (
    <SkillProvider>
      <ExperienceProvider>
        <EducationProvider>
          <div className="min-h-screen bg-white">      
            <Header></Header>
            <Banner></Banner>
            <Perfil></Perfil>
            <Skills></Skills>
            <ResumeSection/>
          </div>
        </EducationProvider>
      </ExperienceProvider>
    </SkillProvider>
  )
}

export default Main