import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Play } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      skewY: 5
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute top-40 right-32 w-2 h-2 bg-blue-400/40 rounded-full"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute bottom-32 left-40 w-3 h-3 bg-cyan-400/30 rounded-full"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Central Animated Visual */}
      <motion.div
        style={{ y: ySpring, scale }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1, 
            rotate: 0,
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
            y: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative"
        >
          {/* Main Animated Circle */}
          <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-blue-400/20"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-cyan-400/15"
            />
            
            {/* Central Pulsing Element */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-1/3 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <div className="mb-8 overflow-hidden">
            <motion.h1
              variants={textVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-none tracking-tight"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 700
              }}
            >
              Divyesh Pandav
            </motion.h1>
          </div>

          <div className="mb-6 overflow-hidden">
            <motion.div
              variants={textVariants}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-8 tracking-wide"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Frontend Developer
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium"
              >
                & Digital Craftsman
              </motion.span>
            </motion.div>
          </div>

          <div className="mb-12 overflow-hidden">
            <motion.p
              variants={itemVariants}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              Creating exceptional digital experiences through clean code, 
              innovative design, and meticulous attention to detail.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.button
              variants={buttonVariants}
              onClick={() => scrollToSection('#projects')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-3 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight size={20} />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              transition={{ delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:backdrop-blur-md"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            className="flex items-center justify-center gap-8"
          >
            {[
              { 
                icon: Github, 
                href: "https://github.com", 
                label: "GitHub",
                color: "hover:text-gray-300"
              },
              { 
                icon: Linkedin, 
                href: "https://linkedin.com", 
                label: "LinkedIn",
                color: "hover:text-blue-400"
              },
              { 
                icon: Mail, 
                href: "#contact", 
                label: "Email",
                color: "hover:text-cyan-400"
              }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={index}
                variants={buttonVariants}
                transition={{ delay: 0.6 + index * 0.1 }}
                href={href}
                onClick={href === "#contact" ? (e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                } : undefined}
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 text-gray-400 ${color} rounded-full transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/5`}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Parallax Background Effect */}
      <motion.div
        style={{ y: ySpring, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;