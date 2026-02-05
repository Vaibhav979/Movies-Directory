"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="
        max-w-7xl mx-auto px-6 py-8
        bg-white text-gray-900
        dark:bg-gray-900 dark:text-gray-100
        min-h-screen
      "
    >
      {children}
    </motion.main>
  );
}
