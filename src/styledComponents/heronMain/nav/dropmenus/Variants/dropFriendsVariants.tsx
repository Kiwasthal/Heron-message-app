export const dropFriends = {
  hidden: {
    x: '30vh',
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.25,
      type: 'spring',
      damping: 20,
      stiffness: 400,
    },
  },
  hover: {
    scale: 1.1,
  },
  exit: {
    x: '30vh',
    opacity: 0,
    transition: {
      delay: 1,
    },
  },
};
