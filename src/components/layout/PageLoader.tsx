"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="font-display text-2xl font-bold tracking-[0.3em] text-white md:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            BLACK STONE
          </motion.div>
          <motion.div
            className="mt-2 text-sm uppercase tracking-[0.4em] text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Excavation
          </motion.div>
          <motion.div
            className="mt-8 h-0.5 w-32 overflow-hidden rounded-full bg-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.7 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
