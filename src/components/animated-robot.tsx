"use client";

import { motion } from "framer-motion";

export function AnimatedRobot() {
  return (
    <motion.div
      className="relative flex h-48 w-32 flex-col items-center"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {/* Antenna */}
      <motion.div
        className="absolute top-0 h-8 w-1 bg-primary"
        style={{ originY: 1 }}
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute -top-1 h-3 w-3 rounded-full bg-accent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
      />

      {/* Head */}
      <motion.div className="h-12 w-16 rounded-md bg-secondary shadow-lg flex items-center justify-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-primary" />
        <div className="h-3 w-3 rounded-full bg-primary" />
      </motion.div>

      {/* Body */}
      <div className="relative mt-1 h-24 w-24 rounded-lg bg-card shadow-lg flex flex-col items-center justify-center">
        <div className="h-10 w-16 bg-muted rounded-md" />
      </div>

      {/* Arms */}
      <motion.div
        className="absolute top-14 -left-6 h-16 w-4 rounded-full bg-secondary shadow-md"
        style={{ originY: 0.1 }}
        animate={{ rotate: [-20, 20, -20] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-14 -right-6 h-16 w-4 rounded-full bg-secondary shadow-md"
        style={{ originY: 0.1 }}
        animate={{ rotate: [20, -20, 20] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
      />

      {/* Legs */}
      <div className="absolute bottom-0 flex space-x-6">
        <div className="h-12 w-6 rounded-full bg-secondary shadow-md" />
        <div className="h-12 w-6 rounded-full bg-secondary shadow-md" />
      </div>
    </motion.div>
  );
}
