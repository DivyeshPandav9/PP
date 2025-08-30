import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Zap,
  Monitor,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating icons data
  const floatingIcons = [
    {
      Icon: Code,
      delay: 0,
      x: 15,
      y: 20,
      size: 24,
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      Icon: Palette,
      delay: 1,
      x: 85,
      y: 15,
      size: 20,
      color: "text-purple-500 dark:text-purple-400",
    },
    {
      Icon: Zap,
      delay: 2,
      x: 10,
      y: 75,
      size: 28,
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      Icon: Monitor,
      delay: 1.5,
      x: 90,
      y: 80,
      size: 22,
      color: "text-green-500 dark:text-green-400",
    },
    {
      Icon: Sparkles,
      delay: 0.5,
      x: 75,
      y: 45,
      size: 18,
      color: "text-pink-500 dark:text-pink-400",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        {/* Dynamic Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 dark:from-purple-500/8 dark:to-pink-500/8 rounded-full blur-3xl"
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-30 dark:opacity-20`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-8, 8, -8],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Central Animated Visual */}
      <motion.div
        style={{ y: ySpring }}
        className="absolute inset-0 flex items-center justify-center z-2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: isLoaded ? 0.06 : 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
        >
          <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-200/30 dark:border-blue-400/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-purple-200/20 dark:border-purple-400/15"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border border-cyan-200/25 dark:border-cyan-400/18"
            />

            {/* Central Pulsing Core */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-1/3 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/15 dark:to-cyan-500/15 rounded-full blur-2xl"
            />

            {/* Orbiting Elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${80 + i * 25}px 0px`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mb-6 overflow-hidden"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium backdrop-blur-sm"
              >
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
                Hello, I'm
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                variants={textVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 leading-none tracking-tight"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontWeight: 800,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="block md:inline"
                >
                  Divyesh
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400"
                >
                  Pandav
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="mb-6 overflow-hidden">
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 dark:text-gray-300 mb-8 tracking-wide"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent font-medium"
                >
                  Software Developer
                </motion.span>
                <span className="block text-gray-600 dark:text-gray-400 text-lg mt-2">
                  & Scalable Systems Builder
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <div className="mb-12 overflow-hidden">
              <motion.p
                variants={itemVariants}
                transition={{ delay: 1 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Transforming ideas into robust applications with{" "}
                <motion.span
                  whileHover={{ color: "#60A5FA" }}
                  className="text-blue-600 dark:text-blue-400 cursor-default"
                >
                  innovative design
                </motion.span>
                , clean code, and cutting-edge technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row items-start gap-6 mb-16"
            >
              <motion.button
                variants={buttonVariants}
                onClick={() => scrollToSection("#projects")}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 text-nowrap">
                  Explore My Work
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight size={20} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500"
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
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-nowrap border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:backdrop-blur-md"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              className="flex items-center gap-6"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com",
                  label: "GitHub",
                  color: "hover:text-gray-700 dark:hover:text-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  color: "hover:text-blue-600 dark:hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: "#contact",
                  label: "Email",
                  color: "hover:text-cyan-600 dark:hover:text-cyan-400",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={index}
                  variants={buttonVariants}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  href={href}
                  onClick={
                    href === "#contact"
                      ? (e) => {
                          e.preventDefault();
                          scrollToSection("#contact");
                        }
                      : undefined
                  }
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 text-gray-500 dark:text-gray-400 ${color} rounded-full transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Interactive Code Window */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              className="relative w-96 h-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  portfolio.js
                </span>
              </div>

              {/* Code Content */}
              <div className="p-4 font-mono text-sm">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 2 }}
                  className="space-y-2"
                >
                  <div className="text-purple-600 dark:text-purple-400">
                    const{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      softwareDeveloper
                    </span>{" "}
                    = {`{`}
                  </div>
                  <div className="ml-4 text-gray-700 dark:text-gray-300">
                    name:{" "}
                    <span className="text-green-600 dark:text-green-400">
                      'Divyesh Pandav'
                    </span>
                    ,
                  </div>
                  <div className="ml-4 text-gray-700 dark:text-gray-300">
                    skills: [
                    <span className="text-green-600 dark:text-green-400">
                      'JavaScript'
                    </span>
                    ,{" "}
                    <span className="text-green-600 dark:text-green-400">
                      'TypeScript'
                    </span>
                    ],
                  </div>
                  <div className="ml-4 text-gray-700 dark:text-gray-300">
                    passion:{" "}
                    <span className="text-green-600 dark:text-green-400">
                      'Developing Modern Web Apps'
                    </span>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400">{`}`}</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements Around Code Window */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Code className="text-white" size={24} />
            </motion.div>

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Palette className="text-white" size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          onClick={() => scrollToSection("#about")}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Parallax Background Effect */}
      <motion.div
        style={{ y: ySpring, opacity }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-black/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
