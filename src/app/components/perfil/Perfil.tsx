"use client";
import React, { useContext } from "react";
import { faGithub, faLinkedin, faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LanguageContext } from "@/app/data/LanguageContext";

const Perfil = () => {
  const {language, setLanguage} = useContext(LanguageContext);

  const descargarCV = () => {
    const isSpanish = language === "spanish";
    const fileName = isSpanish ? "CV_GermanSanchoMiñano.pdf" : "CV_GermanSanchoMiñanoEN.pdf";

    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  const labels = {
    disponible: language === "spanish" ? "Disponible para trabajar" : "Available for Work",
    presentacion1: language === "spanish" ? "Hola, soy German Sancho y soy un" : "Hello, I'm German Sancho and I'm a",
    presentacion2: language === "spanish" ? "viviendo en Tucuman, Argentina." : "living in Tucuman, Argentina.",
    profesion: language === "spanish" ? "Desarrollador Web" : "Web Developer",
    descargar: language === "spanish" ? "Descargar CV" : "Download CV",
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 bg-teal-50 rounded-xl shadow-md mb-4 max-w-6xl mx-auto">
      {/* Imagen */}
      <div className="flex-shrink-0">
        <img
          src={`/perfil.jpg`}
          alt="Perfil"
          className="rounded-xl w-75 h-75 object-cover"
        />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-500">German Sancho Miñano</h2>
          <div className="mt-2 inline-flex items-center px-4 py-1 rounded-full text-sm text-gray-600 bg-blue-100">
            {labels.disponible}
            <span className="ml-2 w-2.5 h-2.5 bg-green-500 rounded-full inline-block" />
          </div>
          {/* Íconos sociales */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/GermanSan2002">
              <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://www.facebook.com/Germansanchom">
              <FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://www.instagram.com/gersan2002/">
              <FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://x.com/MinanoGerman">
              <FontAwesomeIcon icon={faXTwitter} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://www.linkedin.com/in/germán-sancho-miñano-82a156254/">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-700 hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Texto e información */}
      <div className="flex flex-col justify-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-500 leading-snug">
          {labels.presentacion1}{" "}
          <span className="text-black">{labels.profesion}</span> {labels.presentacion2}
        </h1>
        <button
          className="mt-6 inline-block bg-black text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800 transition"
          onClick={descargarCV}
        >
          {labels.descargar} ↓
        </button>
      </div>
    </div>
  );
};

export default Perfil;