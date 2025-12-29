import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, variant = 'primary', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-bold transition-all duration-300 rounded-full transform hover:-translate-y-1";
  
  const variants = {
    // Primário: Fundo Verde, Texto Preto (Contraste alto). 
    // Hover: Fica Branco com "Glow" Verde.
    primary: "bg-zentri-main text-black shadow-lg shadow-zentri-main/20 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,220,130,0.6)]",
    
    // Outline: Borda Verde, Texto Verde.
    // Hover: Preenche de Verde, Texto Preto.
    outline: "border-2 border-zentri-main text-zentri-main hover:bg-zentri-main hover:text-black hover:shadow-[0_0_15px_rgba(0,220,130,0.4)]",
    
    // Dark: Para casos específicos, fundo cinza.
    dark: "bg-zentri-card text-white border border-zentri-muted hover:border-zentri-main hover:text-zentri-main"
  };

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;