import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeronMainHolder = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: #fef08a;
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-auto-rows: 6% 1fr 6%;
  overflow: hidden;
`;
