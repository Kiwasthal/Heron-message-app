import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSignInWrapper = styled(motion.div)`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  align-items: center;
  align-content: space-evenly;
  justify-items: center;
`;
