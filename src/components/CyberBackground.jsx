import React, { useState, useEffect } from 'react';

const CyberBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Atualiza a posição do mouse
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* CAMADA 1: O GRID TECNOLÓGICO 
        Usamos gradientes CSS para desenhar linhas finas horizontais e verticais.
      */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px' // Tamanho dos quadrados do grid
        }}
      />

      {/* CAMADA 2: O SPOTLIGHT INTERATIVO (LUZ QUE SEGUE O MOUSE)
        Um gradiente radial que se move baseado no estado mousePos.
      */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 220, 130, 0.15), transparent 50%)`
        }}
      />

      {/* CAMADA 3: ORB SECUNDÁRIO (OPCIONAL)
        Um brilho fixo extra no canto para dar mais profundidade, como no design original.
      */}
       <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500 opacity-[0.08] blur-[150px] rounded-full"></div>
    </div>
  );
};

export default CyberBackground;