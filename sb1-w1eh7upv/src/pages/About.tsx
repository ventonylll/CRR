import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import BackgroundEffects from '../components/BackgroundEffects';
import { Shield, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Доступность",
      description: "Мы стремимся предоставить нашим клиентам доступ к современным ресурсам и технологиям, которые соответствуют их потребностям и бюджету."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Надежность",
      description: "Наша инфраструктура построена на надежных решениях и оборудовании, что гарантирует стабильную работу и безопасность для наших клиентов."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Безопасность",
      description: "Мы заботимся о безопасности ваших данных и инфраструктуры, обеспечивая высший уровень защиты и возможные меры реагирования на угрозы."
    }
  ];

  const teamImages = [
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400"
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
            О Нас
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Наша история и миссия компании
          </motion.p>
        </ParallaxSection>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="minimal" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="glass-strong p-10 rounded-2xl mb-12 relative overflow-hidden"
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
                Компания ООО Цифровые решения
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Предлагает широкий спектр услуг в области виртуализации и облачных технологий с 2015 года. 
                Мы нацелены на оптимизацию процессов и повышение эффективности работы наших клиентов.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Компания была основана с целью предоставить доступные и надежные технологии для разработки 
                программного обеспечения и реализации проектов. Мы начали свое путешествие, основываясь на потребностях клиентов.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Мы работаем с различными клиентами, от стартапов до крупных корпоративных организаций. 
                Наша гибкость и индивидуальный подход позволяют подстраиваться под уникальные потребности каждого клиента.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Photos Section */}
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
              Наша Команда
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl will-change-transform"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)"
                  }}
                >
                  <img
                    src={image}
                    alt={`Team member ${index + 1}`}
                    className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  {/* Animated Corner Elements */}
                  <motion.div
                    className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                  <motion.div
                    className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Values Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="default" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 title-gradient"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Наши Ценности
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 text-center mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Мы верим в важность ценностей, которые определяют нашу работу и взаимодействие с клиентами и партнерами.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="glass-strong p-8 rounded-2xl neon-border text-center hover:scale-105 transition-all duration-500 will-change-transform relative overflow-hidden"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 245, 255, 0.2)",
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
                    delay: index * 0.7,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-cyan-400 mb-6 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 neon-text-subtle">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;