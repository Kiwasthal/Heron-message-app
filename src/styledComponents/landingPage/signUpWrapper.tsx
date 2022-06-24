import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSignUpWrapper = styled(motion.div)`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 10%);
  align-content: space-evenly;
  justify-items: center;
`;
