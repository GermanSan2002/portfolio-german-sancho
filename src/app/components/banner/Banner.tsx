"use client";
import { LanguageContext } from '@/app/data/LanguageContext';
import React, { useContext } from 'react'

function Banner() {
  const {language, setLanguage} = useContext(LanguageContext);
  
  const labels = {
    label1: language === "spanish" ? "Soy" : "I'm",
    label2: language === "spanish" ? "Estudiante de ingenieria en computación" : "Computer Engineer student",
  };

  return (
    <section className="bg-gray-200 rounded-xl py-24 px-4 md:px-16 mt-20 mx-4 mb-12 md:mx-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        {labels.label1}{' '}
        <span className="text-blue-300 stroke-text">GERMAN</span>{' '}
        <span className="text-gray-900">SANCHO</span>
      </h1>

      <div className="mt-8 inline-flex flex-wrap gap-4 bg-white px-6 py-3 rounded-md shadow-md justify-center">
        <span className="text-gray-700">Fullstack Developer</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-700">{labels.label2}</span>
      </div>
    </section>
  )
}

export default Banner