import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Perfil from '../perfil/Perfil'
import Skills from '../skills/Skills'
import SkillProvider from '@/app/data/SkillsContext'
import ResumeSection from '../resume/Resume'
import ExperienceProvider from '@/app/data/ExperienceContext'
import EducationProvider from '@/app/data/EducationContext'
import ContactSection from '../contact/ContactSection'
import Footer from '../footer/footer'
import DataContext from '@/app/data/DataContext'

function Main() {
  return (
    <DataContext>
      <div className="min-h-screen bg-white">      
          <Header></Header>
          <Banner></Banner>
          <section id="about"><Perfil /></section>
          <section id="skills"><Skills /></section>
          <section id="education"><ResumeSection /></section>
          <section id="contact"><ContactSection /></section>
          <Footer/>
        </div>
    </DataContext>
  )
}

export default Main