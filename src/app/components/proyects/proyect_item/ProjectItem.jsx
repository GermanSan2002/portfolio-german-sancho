"use client";
import { LanguageContext } from '@/app/data/LanguageContext';
import React, { useContext } from "react";

function ProjectItem({ item }) {
    const { language } = useContext(LanguageContext);
    const isSpanish = language === "spanish";

    const labels = {
        sourceCode: isSpanish ? "Código Fuente" : "Source Code",
        demo: "Demo",
        preview: isSpanish ? "Código Fuente" : "Project Preview"
    };

    return (
        <div className="w-full max-w-md bg-sky-200 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
            <a href={item.demoLink}>
                <img className="rounded-t-lg w-full h-[250px] object-cover" src={item.imageUrl} alt={`Vista previa del proyecto: ${isSpanish ? item.title_esp : item.title}`} />
            </a>
            <div className="p-5">
                <a href={item.demoLink}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">{isSpanish ? item.title_esp : item.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500">{isSpanish ? item.description_esp: item.description}</p>
                <div className="px-6 pt-4 pb-2">
                    <a href={item.sourceLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-3">
                        {labels.sourceCode}
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a href={item.demoLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        {labels.demo}
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {item.tags && item.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;