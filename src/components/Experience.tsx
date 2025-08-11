import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experienceData = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led development of React-based dashboard serving 10K+ daily users",
        "Improved application performance by 40% through code optimization",
        "Mentored 3 junior developers and established coding best practices",
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "from-blue-600 to-cyan-600",
      current: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "Remote",
      duration: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Built responsive e-commerce platform with 99.9% uptime",
        "Collaborated with UX team to implement pixel-perfect designs",
        "Reduced bundle size by 35% using modern build optimization techniques",
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack"],
      color: "from-green-600 to-teal-600",
      current: false,
    },
    {
      id: 3,
      title: "Junior Frontend Developer",
      company: "StartupXYZ",
      location: "Palo Alto, CA",
      duration: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Developed mobile-first responsive websites for 15+ clients",
        "Implemented automated testing reducing bugs by 60%",
        "Contributed to open-source projects and company blog",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      color: "from-purple-600 to-pink-600",
      current: false,
    },
    {
      id: 4,
      title: "Frontend Developer Intern",
      company: "WebDev Agency",
      location: "San Jose, CA",
      duration: "Summer 2018",
      type: "Internship",
      achievements: [
        "Created landing pages with 25% higher conversion rates",
        "Learned modern development workflows and version control",
        "Assisted in client presentations and project planning",
      ],
      technologies: ["HTML", "CSS", "jQuery", "Git"],
      color: "from-orange-600 to-red-600",
      current: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React:
        "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      TypeScript:
        "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      JavaScript:
        "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700",
      "Vue.js":
        "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700",
      "Next.js":
        "bg-gray-50 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",
      "Tailwind CSS":
        "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700",
      HTML5:
        "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700",
      CSS3: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      SCSS: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700",
      Bootstrap:
        "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700",
      Webpack:
        "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      jQuery:
        "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700",
      Git: "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600",
    };
    return (
      colors[tech] ||
      "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
    );
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gray-50/50 dark:bg-gray-800/50 transition-colors duration-500"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-full mb-6"
            >
              <Briefcase className="text-white" size={32} />
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Work Experience
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-gray-900 dark:bg-white mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              My professional journey in frontend development, building
              impactful solutions and growing with amazing teams.
            </motion.p>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden"
              >
                {/* Current Position Indicator */}
                {experience.current && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                    className="absolute top-6 right-6"
                  >
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full border border-green-200 dark:border-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Current
                    </div>
                  </motion.div>
                )}

                {/* Gradient Accent */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.8 }}
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${experience.color}`}
                />

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Job Info */}
                  <div className="md:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${experience.color} text-white text-sm font-medium rounded-full mb-4`}
                    >
                      {experience.type}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {experience.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
                      className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3"
                    >
                      {experience.company}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.9 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{experience.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin size={16} />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Column - Achievements & Tech */}
                  <div className="md:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 1 }}
                      className="mb-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp
                          size={20}
                          className="text-green-600 dark:text-green-400"
                        />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay:
                                  index * 0.15 + 1.1 + achievementIndex * 0.1,
                              }}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.15 + 1.4 }}
                    >
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: index * 0.15 + 1.5 + techIndex * 0.05,
                            }}
                            className={`px-3 py-1 text-xs font-medium rounded-full border ${getTechColor(
                              tech
                            )}`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white-900 dark:bg-gray-900 dark:text-white text-gray-900 rounded-full transition-all duration-300 font-medium shadow-lg"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Let's Work Together
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
