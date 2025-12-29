import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let w, h;
    let particles = [];

    let mouse = {
      x: undefined,
      y: undefined,
      radius: 120 // Raio do "holofote" do mouse
    };

    // Configurações Ultra-Minimalistas
    const config = {
      baseColor: '0, 220, 130', // Verde Zentri
      particleCount: 80,        // Quantidade equilibrada
      baseSize: 1.2,            // Partículas bem pequenas (fino)
      speed: 0.2,               // Movimento muito lento e elegante
    };

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * config.baseSize + 0.5;
        this.initialSize = this.size;
        
        // Cada partícula tem um "brilho" próprio que pulsa
        this.alpha = Math.random() * 0.1 + 0.05; // Opacidade base muito baixa (5% a 15%)
        this.targetAlpha = this.alpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebater suavemente nas bordas
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // INTERAÇÃO COM O MOUSE
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            // Se o mouse estiver perto: Aumenta opacidade e tamanho levemente
            this.targetAlpha = 0.8; // Brilho forte
            const sizeFactor = (mouse.radius - distance) / mouse.radius;
            this.size = this.initialSize + (sizeFactor * 2); // Cresce um pouco
        } else {
            // Se longe: Volta ao estado "fantasma"
            this.targetAlpha = Math.random() * 0.1 + 0.05;
            this.size = this.initialSize;
        }

        // Transição suave da opacidade (Lerp)
        this.alpha += (this.targetAlpha - this.alpha) * 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Usa sombra para criar o efeito de "Glow" (Neon)
        ctx.shadowBlur = 10; 
        ctx.shadowColor = `rgba(${config.baseColor}, ${this.alpha})`;
        
        ctx.fillStyle = `rgba(${config.baseColor}, ${this.alpha})`;
        ctx.fill();
        
        // Reseta sombra para não pesar a performance
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      const amount = window.innerWidth < 768 ? 40 : config.particleCount;
      for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    };

    const handleMouseLeave = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ background: '#020408' }}
    />
  );
};

export default TechBackground;