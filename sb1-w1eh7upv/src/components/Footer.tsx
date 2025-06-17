import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src="/CKlogo.jpg" 
            alt="Цифровые Решения" 
            className="footer-logo object-contain mx-auto"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          <div className="footer-text">
            <p className="neon-text-subtle text-lg font-semibold mb-2">
              ООО «Цифровые Решения»
            </p>
            <p className="text-gray-400">
              Надежная инфраструктура для разработки программного обеспечения
            </p>
          </div>
          
          <div className="footer-copyright">
            <p>© 2024 ООО «Цифровые Решения». Все права защищены.</p>
            <p className="mt-1 text-xs">
              ИНН 0274957426 | ОГРН 1200200031866
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;