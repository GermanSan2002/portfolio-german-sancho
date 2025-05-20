import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 border-t mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Germán Sancho Minaño. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}