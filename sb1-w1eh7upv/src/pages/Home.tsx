import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ParallaxSection from '../components/ParallaxSection';
import Button3D from '../components/Button3D';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import BackgroundEffects from '../components/BackgroundEffects';
import { Cloud, Shield, Settings, Users } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Облачные решения",
      description: "Предоставляем масштабируемые облачные решения, которые позволяют вашему бизнесу работать без прерываний и с максимальной эффективностью."
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Техническая поддержка",
      description: "Наши специалисты обеспечивают круглосуточную техническую поддержку, готовую помочь в любое время."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Инфраструктура",
      description: "Построенная на современных технологиях инфраструктура гарантирует высокую надежность и безопасность данных."
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
            Ключевые предложения
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Мы предлагаем широкий спектр услуг, которые помогут вашему бизнесу быть более эффективным и безопасным в цифровом пространстве.
          </motion.p>
        </ParallaxSection>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <BackgroundEffects variant="minimal" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-strong p-8 rounded-2xl neon-border hover:scale-105 transition-all duration-500 will-change-transform relative overflow-hidden"
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
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-2xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-cyan-400 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 neon-text-subtle">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <ParallaxSection offset={-50}>
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black relative">
          <BackgroundEffects variant="matrix" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-8 title-gradient"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Наша история и миссия
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Наша команда имеет многолетний опыт работы в сфере разработки программного обеспечения и инфраструктуры. Мы создаем безопасные и инновационные решения для бизнеса, обеспечивая высококачественные услуги на каждом этапе проекта.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button3D>Узнать больше</Button3D>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Testimonial Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
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
                "Цифровые решения помогли нам оптимизировать бизнес-процессы, значительно снизив затраты. Очень довольны сотрудничеством!"
              </p>
              <p className="neon-text-subtle font-semibold text-lg">Иван Петров</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <ParallaxSection offset={30}>
        <section className="py-20 px-4 bg-gradient-to-l from-gray-900 to-black relative">
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
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="glass-strong p-10 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="w-16 h-16 text-cyan-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 neon-text-subtle">Безопасность данных</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Мы гарантируем высокую степень безопасности ваших данных благодаря современным технологиям и надежному оборудованию.
                </p>
                <Button3D variant="secondary">Узнать больше</Button3D>
              </motion.div>

              <motion.div
                className="glass-strong p-10 rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, x: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="w-16 h-16 text-cyan-400 mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 neon-text-subtle">Доступность услуг</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Обеспечиваем 24/7 доступ к нашим услугам, что позволяет вашему бизнесу работать без сбоев и потерь.
                </p>
                <Button3D variant="secondary">Узнать больше</Button3D>
              </motion.div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center relative">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 title-gradient">
            Начните работать с нами
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Запросите консультацию и узнайте, как мы можем помочь в развитии вашего бизнеса с помощью цифровых решений.
          </p>
          <Button3D className="text-xl px-12 py-4">
            Связаться с нами
          </Button3D>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;