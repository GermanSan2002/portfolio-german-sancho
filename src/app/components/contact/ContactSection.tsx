"use client";
import { useContext, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "@/app/data/LanguageContext";

type ContactForm = {
  fullname: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {language, setLanguage} = useContext(LanguageContext);
  const [formData, setFormData] = useState<ContactForm>({
    fullname: "",
    email: "",
    message: "",
  });

  const labels = {
    contact1: language === "spanish" ? "Contactame" : "Contact me",
    contact2: language === "spanish" ? "¡Entremos en contacto!" : "Let's get in touch!",
    domicilio1: language === "spanish" ? "Domicilio:" : "Domicile:",
    domicilio2: language === "spanish" ? "Avenida Belgrano 2215, San Miguel de Tucuman, Tucuman, Argentina" : "Belgrano Avenue 2215, San Miguel de Tucuman, Tucuman, Argentina",
    telefono1: language === "spanish" ? "Numero de contacto:" : "Contact number:",
    telefono2: "+54 9 3876834025",
    emailLabel1: language === "spanish" ? "Envíame un mail:" : "Send me an e-mail:",
    emailLabel2: "germansan2002@outlook.com",
    nombreForm: language === "spanish" ? "Nombre Completo" : "Full Name",
    emailForm: language === "spanish" ? "Correo electronico" : "E-mail adress",
    messageForm: language === "spanish" ? "Tu mensaje" : "Your message",
    formButton: language === "spanish" ? "Enviame un mensaje": "Send me a message"
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const templateParams = {
        name: formData.fullname,
        email: formData.email,       
        message: formData.message    
    };

    try {
        await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        alert("Mensaje enviado con éxito");
        setFormData({ fullname: "", email: "", message: "" });
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        alert("Hubo un error al enviar el mensaje. Intenta más tarde.");
    }
    };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <p className="text-gray-700 tracking-wide uppercase">{labels.contact1}</p>
        <h2 className="text-4xl font-bold text-gray-400">{labels.contact2}</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="bg-gray-100 rounded-lg shadow p-6 w-full md:w-1/3 space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-gray-800 font-semibold">{labels.domicilio1}</h3>
              <p className="text-gray-500">{labels.domicilio2}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-gray-800 font-semibold">{labels.telefono1}</h3>
              <p className="text-gray-500">{labels.telefono2}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-2xl text-gray-700 mt-1" />
            <div>
              <h3 className="text-gray-800 font-semibold">{labels.emailLabel1}</h3>
              <p className="text-gray-500">{labels.emailLabel2}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form  onSubmit={handleSubmit} className="bg-white w-full md:w-2/3 space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                {labels.nombreForm}
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Steve Milner"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                {labels.emailForm}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@websitename.com"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {labels.messageForm}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write Your message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            {labels.formButton} <FaEnvelope className="inline ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}