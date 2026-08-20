import { AnimatePresence, motion } from "motion/react";
import { useLocation, Outlet } from "react-router-dom";

function PageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default PageTransition;