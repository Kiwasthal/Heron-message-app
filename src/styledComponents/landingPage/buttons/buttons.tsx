import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  width: 40%;
  border: none;
  padding: 0.5rem;
  color: #fff;
`;

export type ButtonProps = {
  children: string;
};
