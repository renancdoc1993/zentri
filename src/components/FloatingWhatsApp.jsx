import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5511999999999" // SEU NUMERO AQUI
      target="_blank"
      rel="noreferrer"
      // MUDANÇA: z-[9999] garante que ele fique acima de qualquer coisa no site
      className="fixed bottom-6 right-6 z-[9999] group flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      {/* Efeito de Onda */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100 duration-1000"></div>
      
      {/* Botão */}
      <div className="relative bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-300 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]">
        <MessageCircle size={32} color="white" fill="white" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;