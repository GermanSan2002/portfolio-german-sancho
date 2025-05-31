"use client";
import SkillItem from './skill_item/SkillItem';
import { SkillsContext } from '@/app/data/SkillsContext';
import React, { useContext } from "react";
import { LanguageContext } from '@/app/data/LanguageContext';

const Skills = () => {
  const {skills, setSkills} = useContext(SkillsContext);
  const {language, setLanguage} = useContext(LanguageContext);

  const labels = {
    skils: language === "spanish" ? "HABILIDADES" : "SKILLS",
    mySkills: language === "spanish" ? "Estas son mis habilidades" : "These are my skills",
    presentacion2: language === "spanish" ? "viviendo en Tucuman, Argentina." : "living in Tucuman, Argentina.",
    profesion: language === "spanish" ? "Desarrollador Web" : "Web Developer",
    descargar: language === "spanish" ? "Descargar CV" : "Download CV",
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-2xl tracking-wide text-gray-500 uppercase">{labels.skils}</h3>
        <h2 className="text-4xl font-semibold text-gray-900">{labels.mySkills}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4">
        {skills.map((hab, index) => (
          <SkillItem key={index} skill={hab}></SkillItem>
        ))}
      </div>
    </section>
  );
};

export default Skills;
