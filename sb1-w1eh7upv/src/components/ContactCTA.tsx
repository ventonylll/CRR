import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      className="contact-cta will-change-transform"
      onClick={() => navigate('/contacts')}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 40px rgba(0, 245, 255, 0.6)"
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 1
      }}
    >
      <MessageCircle className="w-5 h-5 mr-2 inline" />
      Связаться с нами
    </motion.button>
  );
};

export default ContactCTA;