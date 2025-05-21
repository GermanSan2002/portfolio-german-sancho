"use client";
import React, { useContext } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem"
import StudyItem from "./StudyItem/StudyItem"
import { EducationContext } from "@/app/data/EducationContext";
import { ExperienceContext } from "@/app/data/ExperienceContext";
import { LanguageContext } from "@/app/data/LanguageContext";

const ResumeSection: React.FC = () => {
  const {education, setEducation} = useContext(EducationContext);
  const {experience, setExperience} = useContext(ExperienceContext);
  const {language, setLanguage} = useContext(LanguageContext);

  const labels = {
    exp: language === "spanish" ? "Experiecias" : "Experiences",
    res: language === "spanish" ? "Resumen profesional" : "Professional Summary",
    presentacion2: language === "spanish" ? "viviendo en Tucuman, Argentina." : "living in Tucuman, Argentina.",
    profesion: language === "spanish" ? "Desarrollador Web" : "Web Developer",
    descargar: language === "spanish" ? "Descargar CV" : "Download CV",
  };

  return (
    <section className="bg-gray-100 py-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">{labels.exp}</h4>
        <h2 className="text-4xl font-semibold mb-12">{labels.res}</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div className="space-y-6">
            {experience.map((item, idx) => (
              <ExperienceItem key={idx} experience={item}></ExperienceItem>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            {education.map((item, idx) => (
              <StudyItem key={idx} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;