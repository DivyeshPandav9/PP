import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    if (isInView && !animatedSkills) {
      setAnimatedSkills(true);
    }
  }, [isInView, animatedSkills]);

  const skillCategories = [
    // {
    //   title: "Core Skills",
    //   skills: [
    //     { name: "JavaScript (ES6+)", level: 95, color: "bg-yellow-500" },
    //     { name: "TypeScript", level: 90, color: "bg-blue-600" },
    //     { name: "HTML5 & CSS3", level: 98, color: "bg-orange-500" },
    //   ],
    // },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800 dark:invert" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Material UI (MUI)", level: 88, color: "bg-indigo-500" },
        { name: "React Query", level: 85, color: "bg-pink-500" },
        { name: "Redux", level: 87, color: "bg-purple-600" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Fastify", level: 80, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700 dark:invert" },
        { name: "TypeBox", level: 75, color: "bg-blue-400" },
        { name: "Kysely", level: 78, color: "bg-teal-500" },
        { name: "PostgreSQL", level: 82, color: "bg-sky-600" },
        { name: "Sql", level: 78, color: "bg-pink-600" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 90, color: "bg-gray-700 dark:invert" },
        { name: "Webpack/Vite", level: 80, color: "bg-green-500" },
        { name: "Docker", level: 75, color: "bg-blue-400" },
        { name: "AWS/Vercel", level: 70, color: "bg-orange-400" },
        { name: "Figma", level: 85, color: "bg-purple-500" },
        { name: "Jest/Testing", level: 80, color: "bg-red-500" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const SkillBar = ({
    skill,
    index,
    categoryIndex,
  }: {
    skill: any;
    index: number;
    categoryIndex: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: (categoryIndex * 6 + index) * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: (categoryIndex * 6 + index) * 0.1 + 0.3,
          }}
          className="text-gray-500 dark:text-gray-400 text-sm"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-2 rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          animate={animatedSkills ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: (categoryIndex * 6 + index) * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );

  return (
    <section
      id="skills"
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
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"
            >
              <Brain className="text-white" size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              I continuously evolve my skill set to stay current with the latest
              technologies and best practices in frontend development.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-1 gap-12"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
                >
                  {category.title}
                </motion.h3>
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill}
                      index={index}
                      categoryIndex={categoryIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "5+",
                  label: "Years Experience",
                  color: "text-blue-600 dark:text-blue-400",
                },
                {
                  value: "50+",
                  label: "Projects Completed",
                  color: "text-cyan-600 dark:text-cyan-400",
                },
                {
                  value: "20+",
                  label: "Happy Clients",
                  color: "text-green-600 dark:text-green-400",
                },
                {
                  value: "10+",
                  label: "Technologies",
                  color: "text-yellow-600 dark:text-yellow-400",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
