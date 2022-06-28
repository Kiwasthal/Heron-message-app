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

export const StyledAppFeatures = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
