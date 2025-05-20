"use client";
import React, { useContext } from "react";
import ExperienceItem from "./ExperienceItem/ExperienceItem"
import StudyItem from "./StudyItem/StudyItem"
import { EducationContext } from "@/app/data/EducationContext";
import { ExperienceContext } from "@/app/data/ExperienceContext";

const ResumeSection: React.FC = () => {
  const {education, setEducation} = useContext(EducationContext);
  const {experience, setExperience} = useContext(ExperienceContext);

  return (
    <section className="bg-gray-100 py-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Experiecias</h4>
        <h2 className="text-4xl font-semibold mb-12">Resumen Profesional</h2>
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