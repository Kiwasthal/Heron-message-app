export const landingElementVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: (i: number) => ({
    y: '0',
    opacity: 1,
    transition: {
      delay: i * 1,
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  }),
  exit: {
    y: '100vh',
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
