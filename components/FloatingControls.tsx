
import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, MapPin } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* --- Floating Contacts (Left Side) --- */}
      <div className="fixed left-4 bottom-6 z-40 flex flex-col gap-3">
        
        {/* WhatsApp */}
        <a 
          href="https://wa.me/5541999383882" 
          target="_blank" 
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-900/30 transition-all duration-300 hover:scale-110"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          {/* Tooltip */}
          <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
            WhatsApp Rápido
          </span>
        </a>

        {/* Maps */}
        <a 
          href="https://maps.google.com/?q=Rua+Imaculada+Conceição,+764,+Prado+Velho,+Curitiba" 
          target="_blank" 
          rel="noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-900/30 transition-all duration-300 hover:scale-110"
          aria-label="Como Chegar"
        >
          <MapPin className="w-5 h-5" />
          <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-gray-700">
            Ir para a Loja
          </span>
        </a>

      </div>

      {/* --- Back to Top Button (Right Side) --- */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-24 z-40 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full shadow-lg backdrop-blur-sm border border-white/10 transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
