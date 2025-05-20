"use client";
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import SkillItem from './skill_item/SkillItem';
import { SkillsContext } from '@/app/data/SkillsContext';
import { useContext } from 'react';

const Skills = () => {
  const habilidades = [
    {
      icon: <FaPaintBrush className="text-5xl text-gray-600 mb-4" />,
      titulo: "Diseño Gráfico",
      descripcion: "Diseño visual atractivo y profesional para marcas y proyectos digitales.",
    },
    {
      icon: <FaCode className="text-5xl text-gray-600 mb-4" />,
      titulo: "Desarrollo Web",
      descripcion: "Desarrollo de sitios web modernos, rápidos y responsivos con las mejores prácticas.",
    },
    {
      icon: <FaMobileAlt className="text-5xl text-gray-600 mb-4" />,
      titulo: "Apps Móviles",
      descripcion: "Creación de aplicaciones móviles intuitivas y funcionales para iOS y Android.",
    },
  ];

  const {skills, setSkills} = useContext(SkillsContext);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-sm tracking-wide text-gray-500 uppercase">HABILIDADES</h3>
        <h2 className="text-4xl font-semibold text-gray-900">Mis Habilidades</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {skills.map((hab, index) => (
          <SkillItem key={index} skill={hab}></SkillItem>
        ))}
      </div>
    </section>
  );
};

export default Skills;
