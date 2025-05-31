"use client";
import { LanguageContext } from '@/app/data/LanguageContext';
import React, { useContext } from "react";

function SkillItem({skill}) {
  const {language, setLanguage} = useContext(LanguageContext);
  const isSpanish = language === "spanish";

  return (
    <div className="bg-sky-100 w-full max-w-sm rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center">
        <i className={`${skill.iconClass} text-5xl text-gray-600 mb-4`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
        {isSpanish ? skill.titulo : skill.title}
      </h3>
      <p className="text-gray-600 mt-2">
        {isSpanish ? skill.descripcion : skill.description}
      </p>
    </div>
  );
}

export default SkillItem