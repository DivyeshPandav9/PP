import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "Stanford University",
      duration: "2018 - 2020",
      grade: "GPA: 3.9/4.0",
      coursework: [
        "Advanced Algorithms",
        "Machine Learning",
        "Web Development",
      ],
      type: "Masters",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Engineering",
      institution: "University of California, Berkeley",
      duration: "2014 - 2018",
      grade: "Magna Cum Laude",
      coursework: [
        "Data Structures",
        "Software Engineering",
        "Database Systems",
      ],
      type: "Bachelors",
      color: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      degree: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      duration: "2017",
      grade: "Certificate of Completion",
      coursework: ["React.js", "Node.js", "MongoDB"],
      type: "Certificate",
      color: "from-green-600 to-teal-600",
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
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 3,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section
      id="education"
      className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-500"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-full mb-4 md:mb-6"
            >
              <GraduationCap className="text-white" size={24} />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tight px-4"
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Education
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="h-0.5 bg-gray-900 dark:bg-white mx-auto mb-6 md:mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
            >
              My academic journey and continuous learning path in computer
              science and web development.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Responsive positioning */}
            <div className="absolute left-6 sm:left-8 lg:left-1/2 transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700">
              <motion.div
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full bg-gradient-to-b from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
              />
            </div>

            {/* Education Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8 md:space-y-12"
            >
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:flex-row`}
                >
                  {/* Timeline Dot - Responsive positioning */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    className={`absolute left-4 sm:left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 mt-8`}
                  />

                  {/* Content Card - Improved responsive layout */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0
                        ? "lg:mr-auto lg:pr-8"
                        : "lg:ml-auto lg:pl-8"
                    } sm:ml-16 lg:ml-0 mr-4 sm:mr-6 lg:mr-0`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-2xl">
                      {/* Type Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                        className={`inline-block px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r ${item.color} text-white text-xs md:text-sm font-medium rounded-full mb-3 md:mb-4`}
                      >
                        {item.type}
                      </motion.div>

                      {/* Degree */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.1 }}
                        className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 leading-tight"
                        style={{
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}
                      >
                        {item.degree}
                      </motion.h3>

                      {/* Institution */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2 md:mb-3"
                      >
                        <BookOpen size={16} className="flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base">
                          {item.institution}
                        </span>
                      </motion.div>

                      {/* Duration */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.3 }}
                        className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3 md:mb-4"
                      >
                        <Calendar size={14} className="flex-shrink-0" />
                        <span className="text-sm md:text-base">
                          {item.duration}
                        </span>
                      </motion.div>

                      {/* Grade */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.4 }}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-3 md:mb-4"
                      >
                        <Award
                          size={14}
                          className="text-yellow-500 flex-shrink-0"
                        />
                        <span className="font-medium text-sm md:text-base">
                          {item.grade}
                        </span>
                      </motion.div>

                      {/* Coursework */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: index * 0.2 + 1.5 }}
                      >
                        <h4 className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Key Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {item.coursework.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={
                                isInView
                                  ? { opacity: 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 }
                              }
                              transition={{
                                duration: 0.4,
                                delay: index * 0.2 + 1.6 + courseIndex * 0.1,
                              }}
                              className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
