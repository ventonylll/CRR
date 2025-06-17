import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import BackgroundEffects from '../components/BackgroundEffects';
import { ExternalLink, Cpu, Cloud, Zap } from 'lucide-react';

const Partners: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Виртуализация и Высокопроизводительные Вычисления",
      description: "Комплексные решения для виртуализации серверов с видеокартами NVIDIA A100, обеспечивающие максимальную производительность для самых требовательных задач."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Искусственный Интеллект и Машинное Обучение",
      description: "Разработка и внедрение ИИ-решений для бизнеса, создание интеллектуальных ассистентов и автоматизация процессов на основе данных."
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Облачные Сервисы и Аренда Серверов",
      description: "Надежные облачные сервисы и аренда серверов, позволяющие клиентам сосредоточиться на основной деятельности."
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
            Партнеры
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Совместное предоставление инновационных сервисов
          </motion.p>
        </ParallaxSection>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="minimal" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="glass-strong p-10 rounded-2xl mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 title-gradient">
                Партнерство с ООО «Технодом»
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Мы рады сообщить, что наша компания активно сотрудничает с ООО «Технодом», одной из ведущих 
                организаций в области виртуализации и высокопроизводительных вычислений.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                ООО «Технодом» специализируется на предоставлении передовых решений для серверов, оснащенных 
                видеокартами NVIDIA A100, что позволяет обеспечивать максимальную производительность и 
                эффективность для самых требовательных задач.
              </p>
              
              <motion.div 
                className="flex items-center space-x-6 mt-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-2xl font-bold text-black">ТД</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold neon-text-subtle">ООО «Технодом»</h3>
                  <p className="text-gray-400">Стратегический партнер</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ParallaxSection offset={-30}>
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black relative">
          <BackgroundEffects variant="matrix" />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 title-gradient"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Инновационные Услуги и Решения
            </motion.h2>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="glass-strong p-10 rounded-2xl neon-border relative overflow-hidden will-change-transform"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 80
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.8,
                    }}
                  />
                  
                  <div className="flex items-start space-x-8 relative z-10">
                    <motion.div 
                      className="text-cyan-400 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4 neon-text-subtle">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Website Link Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="default" />
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
              <h3 className="text-2xl font-bold mb-6 neon-text-subtle">Узнать больше о наших партнерах</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Посетите официальный сайт ООО «Технодом» для получения подробной информации о предоставляемых услугах.
              </p>
              <motion.a
                href="https://greencloud24.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 will-change-transform"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 245, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>greencloud24.ru</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;