import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import BackgroundEffects from '../components/BackgroundEffects';
import { Cloud, Settings, Shield, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      icon: <Cloud className="w-16 h-16" />,
      title: "Облачные решения",
      description: "Предоставляем услуги облачной виртуализации с доступом к современным серверам и высокоэффективным SSD, обеспечивающим стабильную работу приложений без простоя.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      number: "02",
      icon: <Settings className="w-16 h-16" />,
      title: "Техническая поддержка",
      description: "Наши решения по сетевой инфраструктуре включают надежное оборудование и DDoS-защиту, что обеспечивает максимальную безопасность и непрерывность бизнеса.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      number: "03",
      icon: <Shield className="w-16 h-16" />,
      title: "Инфраструктура",
      description: "Мы обеспечиваем круглосуточную техническую поддержку и мониторинг, гарантируя стабильную работу всех систем и быструю реакцию на возможные проблемы.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <ContactCTA />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900" />
        <BackgroundEffects variant="circuit" />
        
        <ParallaxSection offset={100} className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 title-gradient will-change-transform"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
          >
            Наши Услуги
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Ключевые предложения компании
          </motion.p>
        </ParallaxSection>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="minimal" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Мы предлагаем широкий спектр услуг, которые помогут вашему бизнесу быть более эффективным и безопасным в цифровом пространстве.
          </motion.p>

          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 60
                }}
                viewport={{ once: true }}
              >
                <div className="lg:w-1/2">
                  <motion.div 
                    className="glass-strong p-10 rounded-2xl neon-border relative overflow-hidden will-change-transform"
                    whileHover={{ 
                      scale: 1.02, 
                      y: -10,
                      boxShadow: "0 25px 50px rgba(0, 245, 255, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl"
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.8,
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <motion.span 
                          className="text-7xl font-bold title-gradient mr-8"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {service.number}
                        </motion.span>
                        <motion.div 
                          className="text-cyan-400"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {service.icon}
                        </motion.div>
                      </div>
                      <h3 className="text-3xl font-bold mb-6 neon-text-subtle">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>
                      <Button3D>Начать</Button3D>
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl will-change-transform"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 25px 50px rgba(0, 245, 255, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    
                    {/* Animated Corner Elements */}
                    <motion.div
                      className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-0 hover:opacity-100"
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.1 }}
                    />
                    <motion.div
                      className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 opacity-0 hover:opacity-100"
                      whileHover={{ scale: 1.2 }}
                      transition={{ delay: 0.2 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <ParallaxSection offset={-50}>
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black relative">
          <BackgroundEffects variant="matrix" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              className="glass-strong p-10 rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              <div className="relative z-10">
                <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                  "Сотрудничество с 'Цифровыми решениями' значительно ускорило наши процессы и повысило безопасность данных. Мы довольны их услугами."
                </p>
                <p className="neon-text-subtle font-semibold text-lg">Анна Иванова</p>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="default" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 title-gradient"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Почему выбрать 'Цифровые Решения'?
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Наши уникальные предложения включают надежность, доступность и безопасность, которые помогут вашему бизнесу максимально эффективно использовать ресурсы.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="glass-strong p-10 rounded-2xl text-center relative overflow-hidden will-change-transform"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-16 h-16 text-cyan-400 mb-6 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 neon-text-subtle">Безопасность данных</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Мы гарантируем высокую степень безопасности ваших данных благодаря современным технологиям и надежному оборудованию. Ваши данные защищены от угроз и потерь.
              </p>
            </motion.div>

            <motion.div
              className="glass-strong p-10 rounded-2xl text-center relative overflow-hidden will-change-transform"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-16 h-16 text-cyan-400 mb-6 mx-auto" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 neon-text-subtle">Доступность услуг</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Обеспечиваем 24/7 доступ к нашим услугам, что позволяет вашему бизнесу работать без сбоев и потерь. Всегда на связи, всегда готовы помочь.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;