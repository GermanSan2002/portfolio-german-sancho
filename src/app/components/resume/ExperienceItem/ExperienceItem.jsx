"use client";
import { LanguageContext } from '@/app/data/LanguageContext';
import React, { useContext } from "react";

function ExperienceItem({ experience }) {
    const {language, setLanguage} = useContext(LanguageContext);
    const isSpanish = language === "spanish";

    return (
    <div className="bg-sky-100 rounded-lg shadow p-6 text-left flex gap-4 items-start">
      <div>
        <p className="text-sm font-semibold text-gray-600">
          {isSpanish ? experience.date : experience.dateEn}
        </p>
        <h3 className="text-lg font-semibold">
          {isSpanish ? experience.title : experience.titleEn}
        </h3>
        <p className="text-sm text-gray-500">
          {isSpanish ? experience.subtitle : experience.subtitleEn}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {isSpanish ? experience.location : experience.locationEn}
        </p>
        {experience.description && (
          <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">
            {isSpanish ? experience.description : experience.descriptionEn}
          </p>
        )}
        <p className="text-sm text-gray-400 mt-2 italic">
          {isSpanish ? experience.duration : experience.durationEn}
        </p>
      </div>
    </div>
  );
}

export default ExperienceItem