import { useEffect, useRef, useState, useCallback } from "react";
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
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;

      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Particles configuration
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Particles loaded
    },
    []
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating icons data
  const floatingIcons = [
    { Icon: Code, delay: 0, x: 10, y: 20, size: 24, color: "text-blue-400" },
    {
      Icon: Palette,
      delay: 1,
      x: 80,
      y: 15,
      size: 20,
      color: "text-purple-400",
    },
    { Icon: Zap, delay: 2, x: 15, y: 70, size: 28, color: "text-yellow-400" },
    {
      Icon: Monitor,
      delay: 1.5,
      x: 85,
      y: 75,
      size: 22,
      color: "text-green-400",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 150,
      skewY: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#3B82F6", "#06B6D4", "#8B5CF6", "#10B981"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        {/* Dynamic Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        />

        {/* Floating Tech Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Central Animated Visual */}
      <motion.div
        style={{ y: ySpring, scale }}
        className="absolute inset-0 flex items-center justify-center z-2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{
            opacity: isLoaded ? 0.08 : 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 2.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
        >
          {/* Main Animated Visualization */}
          <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
            {/* Rotating Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-white/5"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-blue-400/10"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full border border-cyan-400/8"
            />

            {/* Central Pulsing Core */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-1/3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
            />

            {/* Orbiting Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${100 + i * 30}px 0px`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            {/* Main Heading */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                variants={textVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none tracking-tight"
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
                  className="block"
                >
                  Divyesh
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
                >
                  Pandav
                </motion.span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="mb-6 overflow-hidden">
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.9 }}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8 tracking-wide"
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
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] bg-clip-text text-transparent font-medium"
                >
                  Frontend Developer
                </motion.span>
                <span className="block text-gray-400 text-lg mt-2">
                  & Digital Experience Creator
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <div className="mb-12 overflow-hidden">
              <motion.p
                variants={itemVariants}
                transition={{ delay: 1.1 }}
                className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Crafting exceptional digital experiences through{" "}
                <motion.span
                  whileHover={{ color: "#60A5FA" }}
                  className="text-blue-400 cursor-default"
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
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-2xl overflow-hidden"
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
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-nowrap border-2 border-white/20 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:backdrop-blur-md"
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
                  color: "hover:text-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: "#contact",
                  label: "Email",
                  color: "hover:text-cyan-400",
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
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 text-gray-400 ${color} rounded-full transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:bg-white/5 border border-white/10 hover:border-white/20`}
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
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative w-96 h-64 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden"
            >
              {/* Window Header */}
              <div className="flex items-center gap-2 p-4 border-b border-gray-700/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">
                  portfolio.tsx
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
                  <div className="text-purple-400">
                    const <span className="text-blue-400">developer</span> ={" "}
                    {`{`}
                  </div>
                  <div className="ml-4 text-gray-300">
                    name:{" "}
                    <span className="text-green-400">'Divyesh Pandav'</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    skills: [<span className="text-green-400">'React'</span>,{" "}
                    <span className="text-green-400">'TypeScript'</span>],
                  </div>
                  <div className="ml-4 text-gray-300">
                    passion:{" "}
                    <span className="text-green-400">
                      'Creating Amazing UX'
                    </span>
                  </div>
                  <div className="text-purple-400">{`}`}</div>
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
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
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
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          onClick={() => scrollToSection("#about")}
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
        className="absolute inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
