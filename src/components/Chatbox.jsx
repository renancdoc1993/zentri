import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [step, setStep] = useState(0); 
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [leadInfo, setLeadInfo] = useState({ name: '', service: '' });
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Sou a IA da Zentri. 👋' },
    { type: 'bot', text: 'Para começarmos, como posso te chamar?' }
  ]);

  const messagesEndRef = useRef(null);
  const myNumber = "5511999999999"; // Substitua pelo seu número real

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleUserResponse = async (text) => {
    if (!text.trim()) return;
    
    // Adiciona mensagem do usuário
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    // Simulação de IA processando
    setTimeout(() => {
      let nextBotMsg = '';
      
      if (step === 0) {
        setLeadInfo(prev => ({ ...prev, name: text }));
        nextBotMsg = `Prazer em te conhecer, ${text}! 🚀 Qual serviço você busca para sua empresa hoje?`;
        setStep(1);
      } else if (step === 1) {
        setLeadInfo(prev => ({ ...prev, service: text }));
        nextBotMsg = 'Perfeito. Tenho especialistas prontos para te atender sobre isso agora mesmo no WhatsApp. Vamos finalizar por lá?';
        setStep(2); // Libera o botão de WhatsApp
      }
      
      setMessages(prev => [...prev, { type: 'bot', text: nextBotMsg }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    /* Container pai com pointer-events-none para não bloquear o site quando o chat está fechado */
    <div className="fixed bottom-8 right-6 z-[4000] flex flex-col items-end pointer-events-none">
      
      {/* Janela do Chat */}
      <div className={`mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[480px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
        isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Header do Chat */}
        <div className="bg-gradient-to-r from-zentri-main to-emerald-600 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600">
              <Sparkles size={16} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-black text-xs leading-none">IA Zentri</h3>
              <span className="text-[10px] text-black/60 font-medium">Online agora</span>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black pointer-events-auto transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Área de Mensagens */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                msg.type === 'user' 
                ? 'bg-zentri-main text-black font-medium rounded-tr-none' 
                : 'bg-white/10 text-white border border-white/5 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Rodapé do Chat (Input ou Botão WhatsApp) */}
        <div className="p-4 border-t border-white/10 bg-black/40 pointer-events-auto">
          {step >= 2 ? (
            <button 
              onClick={() => window.open(`https://wa.me/${myNumber}?text=Olá! Me chamo ${leadInfo.name} e tenho interesse em ${leadInfo.service}.`, '_blank')} 
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_4px_15px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle size={18}/> Falar no WhatsApp
            </button>
          ) : (
            <form onSubmit={(e) => {e.preventDefault(); handleUserResponse(inputText)}} className="flex gap-2">
              <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder="Digite aqui..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zentri-main transition-colors" 
              />
              <button 
                type="submit" 
                className="bg-zentri-main text-black p-2 rounded-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_10px_rgba(0,220,130,0.2)]"
              >
                <Send size={18}/>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Botão Flutuante (Fixo) */}
      <div className="pointer-events-auto relative">
        {showNotification && !isOpen && (
          <div className="hidden md:block absolute bottom-full right-0 mb-3 w-max bg-white text-black text-[10px] font-black px-4 py-2 rounded-lg shadow-xl uppercase tracking-tighter animate-bounce-slow">
            Fale com a IA 🤖
            <button 
              onClick={(e) => {e.stopPropagation(); setShowNotification(false)}} 
              className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center border-2 border-black hover:bg-red-600 transition-colors"
            >
              <X size={8}/>
            </button>
            <div className="absolute top-full right-6 w-2 h-2 bg-white rotate-45 -translate-y-1"></div>
          </div>
        )}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-zentri-main flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
        >
          {isOpen ? <X className="text-black" /> : <MessageCircle className="text-black fill-black" />}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;