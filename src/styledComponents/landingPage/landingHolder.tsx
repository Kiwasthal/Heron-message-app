import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export const fadeIn = {
  hidden: {
    opacity: 0.3,
    transition: {
      delay: 0,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const StyledLandingHolder = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #fef08a;
  display: grid;
  grid-template-columns: 60% 1fr;
  overflow: hidden;
`;
