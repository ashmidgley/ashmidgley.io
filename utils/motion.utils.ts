export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 100,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};
