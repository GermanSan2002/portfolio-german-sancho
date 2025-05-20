"use client";
import React from "react";
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Perfil = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const descargarCV = () => {
    const link = document.createElement('a');
    link.href = `/CV_GermanSanchoMiñano.pdf`;
    link.download = 'CV_GermanSanchoMiñano.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 bg-white rounded-xl shadow-md mb-4 max-w-6xl mx-auto">
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
            Available for Work
            <span className="ml-2 w-2.5 h-2.5 bg-green-500 rounded-full inline-block" />
          </div>
          {/* Íconos sociales */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/GermanSan2002">
              <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://facebook.com/tuusuario">
              <FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-700 hover:text-black" />
            </a>
            <a href="https://twitter.com/tuusuario">
              <FontAwesomeIcon icon={faTwitter} className="text-xl text-gray-700 hover:text-black" />
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
          Hola, soy German Sancho y soy un
          <br />
          <span className="text-black">Desarrollador Web</span> viviendo en Tucuman, Argentina.
        </h1>
        <button
          className="mt-6 inline-block bg-black text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800 transition"
          onClick={descargarCV}
        >
          Descargar CV ↓
        </button>
      </div>
    </div>
  );
};

export default Perfil;