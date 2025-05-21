"use client";
import React, { useContext } from 'react'
import { LanguageContext } from '@/app/data/LanguageContext';
import { FaBook } from 'react-icons/fa'

function StudyItem({ item }) {
    const {language, setLanguage} = useContext(LanguageContext);
    const isSpanish = language === "spanish";

    return (
        <div className="bg-sky-100 rounded-lg shadow p-6 text-left flex gap-4 items-start">
            <div className="bg-white p-3 rounded-xl">
                <FaBook size={20} />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-600">{isSpanish ? item.date : item.dateEn}</p>
                <h3 className="text-lg font-semibold">{isSpanish ? item.degree : item.degreeEn}</h3>
                <p className="text-sm text-gray-500">{isSpanish ? item.institution : item.institutionEn}</p>
                <p className="text-sm text-gray-400 italic mt-1">{isSpanish ? item.field : item.fieldEn}</p>
            </div>
        </div>
    )
}

export default StudyItem