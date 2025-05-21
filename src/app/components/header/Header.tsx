'use client';
import { LanguageContext } from '@/app/data/LanguageContext';
import { useContext, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {language, setLanguage} = useContext(LanguageContext);

  const changeLanguage = () => {
    setLanguage(language === "spanish" ? "english" : "spanish");
  };

  const labels = {
    home: language === "spanish" ? "Inicio" : "Home",
    about: language === "spanish" ? "Sobre mí" : "About",
    skills: language === "spanish" ? "Habilidades" : "Skills",
    education: language === "spanish" ? "Experiencias" : "Education",
    contact: language === "spanish" ? "Contacto" : "Contact",
    toggleLang: language === "spanish" ? "EN" : "ES",
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600">
              <img
                src={`/logo-header.svg`}
                alt="German logo"
                className="h-10"
              />
            </a>
          </div>

          {/* Botón hamburguesa y switch */}
          <div className="flex items-center gap-4">
            {/* Toggle idioma */}
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={changeLanguage}
                checked={language === 'english'}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {labels.toggleLang}
              </span>
            </label>

            {/* Botón menú mobile */}
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
          </div>

          {/* Menú */}
          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
              <li><a href="#" className="text-gray-700 hover:text-blue-600">{labels.home}</a></li>
              <li><a href="#about" className="text-gray-700 hover:text-blue-600">{labels.about}</a></li>
              <li><a href="#skills" className="text-gray-700 hover:text-blue-600">{labels.skills}</a></li>
              <li><a href="#education" className="text-gray-700 hover:text-blue-600">{labels.education}</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600">{labels.contact}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;