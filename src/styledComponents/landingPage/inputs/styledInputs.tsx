import styled from 'styled-components';
import { motion } from 'framer-motion';

export const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const StyledInput = styled(motion.input)`
  width: 80%;
`;
