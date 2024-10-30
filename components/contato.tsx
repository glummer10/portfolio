"use client"

import { useEffect, useState } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { Mail } from 'lucide-react'

const ContactSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleContactClick = (type: any) => {
    let message = '';
    if (type === 'discord') {
      message = "Discord: \n@gdez.ai";
    } else if (type === 'email') {
      message = 'Email: {contato.email}'; 
    }
    setPopupMessage(message);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'; // Desativa a rolagem
    } else {
      document.body.style.overflow = 'auto'; // Reativa a rolagem
    }
    // Limpeza do efeito
    return () => {
      document.body.style.overflow = 'auto'; // Reativa a rolagem ao desmontar
    };
  }, [isPopupOpen]);

  return (
    <section id="Contato" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Contatos:</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            onClick={() => handleContactClick('discord')}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          >
            <BsDiscord className="h-8 w-8" />
          </a>
          <a
            href="#"
            onClick={() => handleContactClick('email')}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
        {isPopupOpen && <Popup message={popupMessage} onClose={closePopup} />}
      </div>
    </section>
  );
};

const Popup = ({ message, onClose }: any) => {
    return (
      <div className="w-screen h-screen fixed inset-0 flex items-center justify-center overflow-hidden" style={{ zIndex: 1000 }}>
        <div className="bg-black border border-stone-900 shadow-lg rounded-lg p-4 max-w-sm mx-auto" style={{ zIndex: 10000 }}>
          <p className="text-white font-bold">{message}</p>
          <button 
            onClick={onClose} 
            className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-white hover:text-blue-500 font-bold transition-colors duration-300"
          >
            Fechar
          </button>
        </div>
        <div className="fixed inset-0 bg-black opacity-50 verflow-hidden"></div>
      </div>
    );
  };

export default ContactSection;
