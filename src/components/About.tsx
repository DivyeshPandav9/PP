import { Code, Palette, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Palette className="text-cyan-600 dark:text-cyan-400" size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
    },
    {
      icon: <Users className="text-green-600 dark:text-green-400" size={24} />,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
    {
      icon: <Zap className="text-yellow-600 dark:text-yellow-400" size={24} />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto mb-8"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                variants={itemVariants}
                className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <motion.p variants={itemVariants} className="mb-6">
                  Hi! I'm Divyesh Pandav, a passionate Software Developer with
                  over 2 years of experience creating digital experiences that
                  users love. I specialize in React, TypeScript, and modern CSS
                  frameworks to build responsive, accessible web applications.
                </motion.p>
                <motion.p variants={itemVariants} className="mb-6">
                  My journey started with a Computer Science degree, but my real
                  passion ignited when I discovered the perfect blend of
                  technical problem-solving and creative design in frontend
                  development. I believe great software is not just functional,
                  but delightful to use.
                </motion.p>
                <motion.p variants={itemVariants}>
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or sharing
                  knowledge through tech meetups and mentoring junior
                  developers.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
