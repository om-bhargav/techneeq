import { AnimatePresence, motion } from "motion/react";
import { useLocation, Outlet } from "react-router-dom";

export default function PageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative min-h-screen"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
          },

          animate: {
            opacity: 1,
            transition: {
              duration: 0.1,
            },
          },

          exit: {
            opacity: 1,
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
      >
        <motion.div
          className="fixed inset-0 z-[9999] bg-black pointer-events-none"
          variants={{
            initial: {
              scaleY: 1,
              transformOrigin: "top",
            },

            animate: {
              scaleY: 0,
              transformOrigin: "bottom",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            },

            exit: {
              scaleY: 1,
              transformOrigin: "bottom",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        />

        <motion.div
          variants={{
            initial: {
              y: 30,
              opacity: 0,
            },

            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
            },

            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.35,
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        >
          <Outlet />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}