import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.05,
                backgroundImage: "linear-gradient(to right, #60a5fa, #34d399)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 mb-6 transition-all duration-200"
            >
              Divyesh Pandav
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 dark:text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Frontend Developer passionate about creating beautiful,
              functional, and user-centric web experiences. Always learning,
              always building, always improving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 mb-6"
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="text-red-500" size={16} />
              </motion.div>
              <span>by Divyesh Pandav © {currentYear}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-sm text-gray-500 dark:text-gray-600"
            >
              <p>
                Built with React, TypeScript, Tailwind CSS, and Framer Motion
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
