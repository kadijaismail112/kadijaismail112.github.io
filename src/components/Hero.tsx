import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-100 via-white to-coral-50 animate-gradient-shift"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 border border-coral-300 rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.2, 
              scale: 1,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-coral-600 mb-6"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm Kadija Ismail
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-coral-500 to-peach-500"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Software Engineer, Educator, and Innovator
            </motion.span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stanford graduate passionate about creating impactful software solutions and mentoring the next generation of engineers. 
            Currently focused on building scalable applications and expanding educational opportunities in tech.
          </p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-lg hover:from-coral-600 hover:to-coral-700 transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-coral-500 text-coral-600 rounded-lg hover:bg-coral-50 transition-all"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;