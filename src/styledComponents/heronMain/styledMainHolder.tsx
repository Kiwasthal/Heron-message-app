import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeronMainHolder = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #fef08a;
  display: grid;
  grid-auto-rows: 10% 1fr 6%;
  overflow: hidden;
`;

export const StyledAppFeatures = styled(motion.div)`
  grid-area: 2 / 1 / 4 / 3;
  display: grid;
  overflow: hidden;
  width: 100vw;
  max-height: 100vh;
  grid-template-columns: 50% 50%;
  align-items: center;
`;
