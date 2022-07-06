import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSignInTitle = styled(motion.h2)`
  padding: 0;
  color: ${props => props.theme.main.elements};
`;
