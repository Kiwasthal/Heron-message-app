import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const fadeIn = {
  hidden: {
    opacity: 0.3,
    transition: {
      delay: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const StyledLandingHolder = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #6d28d9;
`;

type LandingProps = {
  children: React.ReactNode;
};

export const LandingHolder = ({ children }: LandingProps) => {
  return (
    <StyledLandingHolder
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledLandingHolder>
  );
};
