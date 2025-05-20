import React from 'react'

function SkillItem({skill}) {
  return (
    <div className="bg-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center">
        <i className={`${skill.iconClass} text-5xl text-gray-600 mb-4`}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{skill.titulo}</h3>
      <p className="text-gray-600 mt-2">{skill.descripcion}</p>
    </div>
  )
}

export default SkillItem