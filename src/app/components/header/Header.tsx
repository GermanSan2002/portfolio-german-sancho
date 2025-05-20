'use client';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600">
              <img src="/logo-header.svg" alt="German logo" className="h-10" />
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú */}
          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Sobre mi</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Experiencias</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Estudios</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-600">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
