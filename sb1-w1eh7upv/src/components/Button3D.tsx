import React from 'react';
import { motion } from 'framer-motion';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button3D: React.FC<Button3DProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = "btn-3d relative overflow-hidden";
  const variantClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-cyan-400 to-blue-500" 
    : "bg-gradient-to-r from-gray-600 to-gray-800";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        rotateX: 15,
        boxShadow: "0 15px 30px rgba(0, 245, 255, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  );
};

export default Button3D;