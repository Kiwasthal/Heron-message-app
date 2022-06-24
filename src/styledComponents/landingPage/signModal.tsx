import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const dropLeft = {
  hidden: {
    x: '100vh',
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.05,
      type: 'spring',
      damping: 25,
      stiffness: 500,
      delay: 3,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

const StyledSignModal = styled(motion.div)`
  width: 70%;
  background-color: #ddd6fe;
  height: 70%;
  grid-area: 1 / 2 / 2 / 3;
  align-self: center;
  margin-left: 10vh;
  border-radius: 20px;
`;

type SignModalProps = {
  children: React.ReactNode;
};

export const SignModal = ({ children }: SignModalProps) => {
  return (
    <StyledSignModal
      variants={dropLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledSignModal>
  );
};
