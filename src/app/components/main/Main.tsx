import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/Banner'
import Perfil from '../perfil/Perfil'
import Skills from '../skills/Skills'
import SkillProvider from '@/app/data/SkillsContext'

function Main() {
  return (
    <SkillProvider>
      <div className="min-h-screen bg-white">      
        <Header></Header>
        <Banner></Banner>
        <Perfil></Perfil>
        <Skills></Skills>
      </div>
    </SkillProvider>
  )
}

export default Main