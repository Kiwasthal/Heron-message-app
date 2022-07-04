import styled from 'styled-components';
import { motion } from 'framer-motion';

export const dropInName = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 1,
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

export const dropInPass = {
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
      delay: 1.3,
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

export const dropInConfPass = {
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
      delay: 1.4,
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

export const dropInEmail = {
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

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  width: 100%;
`;

export const StyledInput = styled(motion.input)`
  width: 80%;
  height: 100%;
  ::placeholder {
    font-style: italic;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
  height: 20px;
`;
