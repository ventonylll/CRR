import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button3D from '../components/Button3D';
import BackgroundEffects from '../components/BackgroundEffects';

const Hub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900" />
        <BackgroundEffects variant="default" />
        
        {/* Additional Dynamic Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400/30 rounded-lg"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity },
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo with Enhanced Animation */}
          <motion.div
            className="w-40 h-40 mx-auto mb-12 relative will-change-transform"
            initial={{ scale: 0, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.img 
              src="/CKlogo.jpg" 
              alt="Цифровые Решения" 
              className="w-full h-full object-contain"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Orbiting Elements */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2" />
              <div className="absolute -bottom-4 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full transform -translate-y-1/2" />
            </motion.div>
          </motion.div>

          {/* Main Title with Enhanced Typography */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 title-gradient will-change-transform"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 1,
              type: "spring",
              stiffness: 80
            }}
          >
            Цифровые Решения
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-light mb-6 subtitle-glow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Для вашего бизнеса
          </motion.h2>

          {/* Enhanced Subtitle Container */}
          <motion.div
            className="glass-strong p-8 rounded-2xl mb-16 max-w-3xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(0, 245, 255, 0.1), transparent)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Надежная инфраструктура для разработки программного обеспечения
                <br />
                <span className="neon-text-subtle">и внедрения современных технологий</span>
              </p>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Button3D
              onClick={() => navigate('/home')}
              className="text-2xl px-16 py-6 will-change-transform"
            >
              Перейти
            </Button3D>
          </motion.div>

          {/* Enhanced Decorative Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-24 h-24 border-2 border-cyan-400/40 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity },
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-blue-400/40 rounded-lg"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <motion.div
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-cyan-400/60 rounded-full flex justify-center relative">
          <motion.div 
            className="w-1.5 h-4 bg-cyan-400 rounded-full mt-2"
            animate={{ 
              opacity: [1, 0.3, 1],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hub;