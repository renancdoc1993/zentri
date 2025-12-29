import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Respeita o atraso inicial antes de começar
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const intervalId = setInterval(() => {
      // Adiciona uma letra por vez
      setDisplayedText((prev) => text.slice(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, started]);

  return (
    <span className={className}>
      {displayedText}
      {/* Cursor piscante verde */}
      <span className="inline-block w-[3px] h-[1em] bg-zentri-main ml-1 animate-pulse align-middle"></span>
    </span>
  );
};

export default Typewriter;