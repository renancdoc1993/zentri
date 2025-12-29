import React, { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let w, h;
    let particles = [];
    
    // Verifica se é dispositivo móvel (menor que 768px)
    const isMobile = window.innerWidth < 768;

    let mouse = {
      x: undefined,
      y: undefined,
      radius: isMobile ? 80 : 150 // Raio menor no mobile
    };

    const config = {
      baseColor: '0, 220, 130', // Verde Zentri
      particleCount: isMobile ? 40 : 80, // Menos partículas no mobile para não travar
      baseSize: isMobile ? 1.5 : 1.2, // Um pouco maiores no mobile para ver melhor
      speed: 0.2,
    };

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * config.baseSize + 0.5;
        this.initialSize = this.size;
        
        // No mobile, a opacidade base é maior (para ver sem tocar)
        // No desktop, começa quase invisível
        this.alpha = isMobile ? Math.random() * 0.3 + 0.1 : Math.random() * 0.1 + 0.05;
        this.targetAlpha = this.alpha;
        
        // Variação para "piscar" no mobile
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
        this.pulseDirection = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Rebater nas bordas
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // INTERAÇÃO (Mouse ou Toque)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Lógica de Interação
        if (mouse.x && distance < mouse.radius) {
            // Se tocar/passar mouse: Brilho Máximo
            this.targetAlpha = 0.9; 
            const sizeFactor = (mouse.radius - distance) / mouse.radius;
            this.size = this.initialSize + (sizeFactor * 3);
        } else {
            // Se estiver longe (ou sem toque)
            if (isMobile) {
                // Lógica MOBILE: "Respiração" (Twinkle)
                // Faz a partícula brilhar e apagar suavemente sozinha
                this.alpha += this.pulseSpeed * this.pulseDirection;
                
                if (this.alpha >= 0.5) this.pulseDirection = -1;
                if (this.alpha <= 0.1) this.pulseDirection = 1;
                
                this.targetAlpha = this.alpha; // Mantém o ciclo
                this.size = this.initialSize;
            } else {
                // Lógica DESKTOP: Volta a ficar quase invisível
                this.targetAlpha = Math.random() * 0.1 + 0.05;
                this.size = this.initialSize;
            }
        }

        // Suavização da transição de opacidade (apenas para desktop ou interação)
        if (!isMobile || (mouse.x && distance < mouse.radius)) {
            this.alpha += (this.targetAlpha - this.alpha) * 0.1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Sombra (Glow)
        ctx.shadowBlur = isMobile ? 5 : 10; // Menos glow no mobile para performance
        ctx.shadowColor = `rgba(${config.baseColor}, ${this.alpha})`;
        
        ctx.fillStyle = `rgba(${config.baseColor}, ${this.alpha})`;
        ctx.fill();
        
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = [];
      // Recalcula quantidade baseada na tela atual
      const amount = window.innerWidth < 768 ? 40 : 80;
      
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

    // Listeners para Mouse (Desktop)
    const handleMouseMove = (e) => {
        mouse.x = e.clientX; // Usar clientX é mais seguro com position fixed
        mouse.y = e.clientY;
    };

    // Listeners para Toque (Mobile)
    const handleTouchMove = (e) => {
        if(e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    };

    const handleLeave = () => {
        mouse.x = undefined;
        mouse.y = undefined;
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove); // Adiciona suporte a toque
    window.addEventListener('touchstart', handleTouchMove); // Reage ao primeiro toque
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('touchend', handleLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('touchend', handleLeave);
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