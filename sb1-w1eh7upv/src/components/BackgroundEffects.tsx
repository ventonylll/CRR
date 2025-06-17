import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectsProps {
  variant?: 'default' | 'matrix' | 'circuit' | 'minimal';
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ variant = 'default' }) => {
  const generateFloatingShapes = () => {
    return [...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className={`floating-shape ${i % 3 === 0 ? 'floating-circle' : i % 3 === 1 ? 'floating-square' : 'floating-triangle'}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: i % 3 === 0 ? '20px' : i % 3 === 1 ? '15px' : 'auto',
          height: i % 3 === 0 ? '20px' : i % 3 === 1 ? '15px' : 'auto',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ));
  };

  const generateMatrixChars = () => {
    const chars = '01ЦР';
    return [...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="matrix-char"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
        initial={{ y: -100 }}
        animate={{ y: '100vh' }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      >
        {chars[Math.floor(Math.random() * chars.length)]}
      </motion.div>
    ));
  };

  const generateParticles = () => {
    return [...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -50, 0],
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 3,
        }}
      />
    ));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit Background */}
      {(variant === 'default' || variant === 'circuit') && (
        <div className="circuit-bg absolute inset-0 opacity-10" />
      )}
      
      {/* Matrix Effect */}
      {variant === 'matrix' && (
        <div className="matrix-bg">
          {generateMatrixChars()}
        </div>
      )}
      
      {/* Floating Shapes */}
      {variant === 'default' && generateFloatingShapes()}
      
      {/* Particles */}
      {(variant === 'default' || variant === 'minimal') && generateParticles()}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-cyan-900/10" />
    </div>
  );
};

export default BackgroundEffects;