import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNav = styled(motion.nav)`
  grid-area: 1 / 1 / 2 / 3;
  background-color: ${props => props.theme.main};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: space-around;
  max-height: 100%;
  width: 50%;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-self: center;
  z-index: 1001;
`;
