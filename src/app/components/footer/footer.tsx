"use client";
import { LanguageContext } from "@/app/data/LanguageContext";
import React, { useContext } from "react";

export default function Footer() {
  const {language, setLanguage} = useContext(LanguageContext);

  const labels = {
    derechos: language === "spanish" ? "Todos los derechos reservados." : "All rights reserved.",
  };

  return (
    <footer className="bg-gray-100 text-gray-600 py-6 border-t mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Germán Sancho Minaño. {labels.derechos}
        </p>
      </div>
    </footer>
  );
}