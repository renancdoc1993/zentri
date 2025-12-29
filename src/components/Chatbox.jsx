import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [step, setStep] = useState(0); 
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Sou a IA da Zentri. 👋' },
    { type: 'bot', text: 'Para começarmos, qual é o seu nome?' }
  ]);

  const messagesEndRef = useRef(null);
  const myNumber = "5511999999999"; 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const handleUserResponse = async (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let nextBotMsg = step === 0 ? `Prazer! 🚀 Qual serviço você busca?` : 'Entendido! Me conte mais ou clique abaixo para o WhatsApp.';
      setMessages(prev => [...prev, { type: 'bot', text: nextBotMsg }]);
      setStep(step + 1);
      setIsTyping(false);
    }, 1200);
  };

  return (
    /* pointer-events-none no container pai resolve o bloqueio dos botões "Ver Projetos" */
    <div className="fixed bottom-8 right-6 z-[4000] flex flex-col items-end pointer-events-none">
      
      {/* Janela do Chat */}
      <div className={`mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[480px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col ${
        isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        <div className="bg-gradient-to-r from-zentri-main to-emerald-600 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emerald-600"><Sparkles size={16} /></div>
            <h3 className="font-bold text-black text-sm">IA Zentri</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black pointer-events-auto"><X size={18} /></button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-zentri-main text-black font-medium' : 'bg-white/10 text-white border border-white/5'}`}>{msg.text}</div>
            </div>
          ))}
          {isTyping && <div className="text-xs text-gray-500 animate-pulse">Digitando...</div>}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-white/10 bg-black/40 pointer-events-auto">
          {step >= 2 ? (
            <button onClick={() => window.open(`https://wa.me/${myNumber}`, '_blank')} className="w-full bg-[#25D366] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <MessageCircle size={18}/> Finalizar no WhatsApp
            </button>
          ) : (
            <form onSubmit={(e) => {e.preventDefault(); handleUserResponse(inputText)}} className="flex gap-2">
              <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Sua resposta..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zentri-main" />
              <button type="submit" className="bg-zentri-main text-black p-2 rounded-lg"><Send size={18}/></button>
            </form>
          )}
        </div>
      </div>

      {/* Botão Flutuante (Sempre clicável) */}
      <div className="pointer-events-auto relative">
        {showNotification && !isOpen && (
          <div className="hidden md:block absolute bottom-full right-0 mb-3 w-max bg-white text-black text-[10px] font-black px-3 py-2 rounded-lg shadow-xl uppercase tracking-tighter">
            Fale com a IA 🤖
            <button onClick={(e) => {e.stopPropagation(); setShowNotification(false)}} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center border-2 border-black"><X size={8}/></button>
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-zentri-main flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95">
          {isOpen ? <X className="text-black" /> : <MessageCircle className="text-black fill-black" />}
        </button>
      </div>
    </div>
  );
};

export default Chatbox;