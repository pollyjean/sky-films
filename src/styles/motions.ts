export const SequentialList = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const SequentialItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
