import React from 'react'
import { FaBook } from 'react-icons/fa'

function ExperienceItem({ experience }) {
    return (
        <div className="bg-white rounded-lg shadow p-6 text-left flex gap-4 items-start">
            <div className="bg-gray-200 p-3 rounded-xl">
                <FaBook size={20} />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-600">{experience.date}</p>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="text-sm text-gray-500">{experience.subtitle}</p>
            </div>
        </div>
    )
}

export default ExperienceItem