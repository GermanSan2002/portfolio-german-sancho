"use client";
import React, { useContext } from 'react';
import { LanguageContext } from '@/app/data/LanguageContext';
import ProjectItem from './proyect_item/ProjectItem';
import { ProjectContext } from '@/app/data/ProjectContext';

function Projects() {
    const {projects, setProjects} = useContext(ProjectContext);
    const { language } = useContext(LanguageContext);

    const labels = {
        title: language === "spanish" ? "PROYECTOS" : "PROJECTS",
        subtitle: language === "spanish" ? "Estos son mis proyectos" : "These are my projects",
        sourceCode: language === "spanish" ? "Código Fuente" : "Source Code",
        demo: "Demo"
    };

    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-12">
                <h3 className="text-2xl tracking-wide text-gray-500 uppercase">{labels.title}</h3>
                <h2 className="text-4xl font-semibold text-gray-900">{labels.subtitle}</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 max-w-8xl mx-auto px-4">
                {projects.map((project, index) => (
                    <ProjectItem key={index} item={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;