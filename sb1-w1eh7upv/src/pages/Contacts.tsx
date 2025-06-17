import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/BackgroundEffects';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Отправка в Telegram
    const telegramMessage = `
Новая заявка с сайта:
Имя: ${formData.name}
Email: ${formData.email}
Телефон: ${formData.phone}
Сообщение: ${formData.message}
    `;
    
    // Отправка email
    const emailData = {
      to: 'oleg.gerasimov.box@gmail.com',
      subject: 'Новая заявка с сайта Цифровые Решения',
      text: telegramMessage
    };

    // Имитация отправки
    console.log('Отправка данных:', { telegramMessage, emailData });
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    
    // Очистка формы
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900" />
        <BackgroundEffects variant="circuit" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-center mb-16 title-gradient will-change-transform"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            Свяжитесь с нами
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            >
              <motion.div 
                className="glass-strong p-8 rounded-2xl relative overflow-hidden will-change-transform"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 245, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MapPin className="w-8 h-8 text-cyan-400 mr-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold neon-text-subtle">Адрес</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  450047, РОССИЯ, Респ БАШКОРТОСТАН, г УФА, ул БАКАЛИНСКАЯ, ДОМ 33/2, оф ПОМЕЩ. 9А
                </p>
              </motion.div>

              <motion.div 
                className="glass-strong p-8 rounded-2xl relative overflow-hidden will-change-transform"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 245, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Phone className="w-8 h-8 text-cyan-400 mr-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold neon-text-subtle">Телефон</h3>
                </div>
                <p className="text-gray-300">+7 (347) 294-52-28</p>
              </motion.div>

              <motion.div 
                className="glass-strong p-8 rounded-2xl relative overflow-hidden will-change-transform"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 245, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="w-8 h-8 text-cyan-400 mr-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold neon-text-subtle">Электронная почта</h3>
                </div>
                <p className="text-gray-300">support@serverspro.ru</p>
              </motion.div>

              {/* Company Info */}
              <motion.div 
                className="glass-strong p-8 rounded-2xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0, 245, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold neon-text-subtle mb-4">Реквизиты</h3>
                <div className="text-gray-300 space-y-2 leading-relaxed">
                  <p>Общество с ограниченной ответственностью «Цифровые решения»</p>
                  <p>Сокращенное наименование ООО «ЦР»</p>
                  <p>ИНН 0274957426</p>
                  <p>КПП 027401001</p>
                  <p>ОГРН 1200200031866</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="glass-strong p-10 rounded-2xl relative overflow-hidden will-change-transform"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold neon-text-subtle mb-8">Отправить сообщение</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                      placeholder="Ваше имя"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300"
                      placeholder="+7 (xxx) xxx-xx-xx"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white resize-none backdrop-blur-sm transition-all duration-300"
                      placeholder="Расскажите о вашем проекте..."
                    />
                  </motion.div>

                  <Button3D className="w-full flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Отправить сообщение</span>
                  </Button3D>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;