import React from 'react'
import { FaBook } from 'react-icons/fa'

function StudyItem({ item }) {
    return (
        <div className="bg-white rounded-lg shadow p-6 text-left flex gap-4 items-start">
            <div className="bg-gray-200 p-3 rounded-xl">
                <FaBook size={20} />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-600">{item.date}</p>
                <h3 className="text-lg font-semibold">{item.degree}</h3>
                <p className="text-sm text-gray-500">{item.institution}</p>
                <p className="text-sm text-gray-400 italic mt-1">{item.field}</p>
            </div>
        </div>
    )
}

export default StudyItem