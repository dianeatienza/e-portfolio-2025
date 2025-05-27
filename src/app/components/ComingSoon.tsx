"use client";

import { motion } from "framer-motion";
import { FaCoffee, FaMugHot } from "react-icons/fa";

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-6xl mb-6 text-primary"
        >
          <FaMugHot className="inline-block" />
        </motion.div>
        <h1 className="text-4xl font-bold text-charcoal mb-4">{title}</h1>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Something amazing is brewing here...
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-charcoal/60">
          <FaCoffee className="animate-bounce" />
          <span className="text-sm">Brewing since 2025</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
