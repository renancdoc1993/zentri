import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  
  // Controle da Conversa
  const [step, setStep] = useState(0); 
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  
  // Dados do Lead
  const [leadData, setLeadData] = useState({ name: '', service: '', details: '' });

  // Histórico de Mensagens
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Sou a IA da Zentri. 👋' },
    { type: 'bot', text: 'Para começarmos, qual é o seu nome?' }
  ]);

  const messagesEndRef = useRef(null);
  const myNumber = "5511999999999"; // SEU NÚMERO AQUI

  // Rola para baixo sempre que chega mensagem nova
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // Se abrir o chat, o balão some automaticamente
  useEffect(() => {
    if (isOpen) setShowNotification(false);
  }, [isOpen]);

  const handleUserResponse = async (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { type: 'user', text }];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let nextBotMsg = '';
      let nextStep = step + 1;

      if (step === 0) {
        setLeadData(prev => ({ ...prev, name: text }));
        nextBotMsg = `Prazer, ${text}! 🚀 Como podemos ajudar sua empresa hoje?`;
      } 
      else if (step === 1) {
        setLeadData(prev => ({ ...prev, service: text }));
        nextBotMsg = 'Entendi. Você poderia me dar mais algum detalhe sobre o projeto? (Ou apenas clique em enviar para pular)';
      } 
      else if (step === 2) {
        setLeadData(prev => ({ ...prev, details: text }));
        nextBotMsg = 'Perfeito! Já preparei tudo. Clique no botão abaixo para falar com nosso especialista no WhatsApp.';
      }

      setMessages(prev => [...prev, { type: 'bot', text: nextBotMsg }]);
      setStep(nextStep);
      setIsTyping(false);
    }, 1200);
  };

  const handleSendToWhatsApp = () => {
    const text = `
*LEAD QUALIFICADO (VIA CHAT)* 🤖
-------------------------
👤 *Nome:* ${leadData.name}
🎯 *Interesse:* ${leadData.service}
📝 *Detalhes:* ${leadData.details || "Não informado"}
-------------------------
_Vim através do chat inteligente do site._
    `.trim();

    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const serviceOptions = [
    "Criação de Site / Landing Page",
    "Gestão de Tráfego Pago",
    "Identidade Visual (Branding)",
    "Consultoria Completa"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* --- JANELA DO CHAT --- */}
      <div 
        className={`mb-4 w-[360px] max-w-[calc(100vw-48px)] h-[500px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-zentri-main to-emerald-600 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
               <Sparkles size={18} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-bold text-black text-sm">Assistente Zentri</h3>
              <p className="text-black/70 text-xs">Inteligência Artificial</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black bg-white/20 p-1 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Corpo Chat */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-zentri-main text-black rounded-tr-none font-medium' 
                    : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Footer / Input */}
        <div className="p-4 bg-black/40 border-t border-white/10 shrink-0">
          {step === 1 && !isTyping && (
            <div className="grid grid-cols-1 gap-2 mb-2">
              {serviceOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleUserResponse(opt)}
                  className="text-left px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm hover:bg-zentri-main hover:text-black hover:border-zentri-main transition-colors text-gray-300"
                >
                  {opt}
                </button>
              ))}
            </div>
          )}

          {step === 3 && (
            <button
              onClick={handleSendToWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg animate-bounce-slow"
            >
              <MessageCircle size={20} /> Finalizar no WhatsApp
            </button>
          )}

          {(step === 0 || step === 2) && !isTyping && (
            <form 
              onSubmit={(e) => { e.preventDefault(); handleUserResponse(inputText); }} 
              className="flex gap-2"
            >
              <input 
                type="text" 
                placeholder="Digite sua resposta..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                autoFocus
                className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zentri-main transition-colors"
              />
              <button 
                type="submit"
                disabled={!inputText.trim()}
                className="bg-zentri-main text-black p-3 rounded-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* --- BOTÃO FLUTUANTE --- */}
      <div className="relative group z-[9999]">
         
         {/* NOTIFICAÇÃO (AJUSTADA) */}
         {/* 'hidden md:block' faz ela sumir em dispositivos móveis */}
         {showNotification && !isOpen && (
             <div className="hidden md:block absolute bottom-full right-0 mb-4 w-max animate-bounce-slow z-0">
                 <div className="bg-white text-black text-xs font-bold pl-4 pr-8 py-3 rounded-xl shadow-lg relative flex items-center">
                     <span className="whitespace-nowrap">Fale com nossa IA 🤖</span>
                     
                     {/* Botão de Fechar o Balão */}
                     <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowNotification(false);
                        }}
                        className="absolute top-1.5 right-1.5 p-1 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100"
                        title="Fechar dica"
                     >
                        <X size={14} />
                     </button>

                     {/* Setinha do balão */}
                     <div className="absolute top-full right-6 w-3 h-3 bg-white transform rotate-45 -translate-y-1.5"></div>
                 </div>
             </div>
         )}

         {/* Botão Principal */}
         <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 flex items-center justify-center group/btn outline-none"
            aria-label="Abrir chat"
         >
            <div className="absolute -inset-2 rounded-full bg-zentri-main/30 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-70 group-hover/btn:opacity-100 z-0"></div>
            <div className="absolute inset-0 rounded-full bg-zentri-main blur-md opacity-40 group-hover/btn:opacity-80 transition-opacity duration-500 z-10"></div>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-600 via-zentri-main to-teal-300 border-2 border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] group-hover/btn:border-white/40 transition-all duration-300 z-20 group-hover/btn:scale-105 ${!isOpen ? 'animate-pulse-slow' : ''}`}></div>
            
            <div className="relative z-30 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12">
                {isOpen ? (
                    <X size={30} className="text-black transition-transform rotate-90 duration-300" />
                ) : (
                    <MessageCircle size={30} className="text-black fill-black" />
                )}
            </div>
         </button>
      </div>
    </div>
  );
};

export default Chatbox;