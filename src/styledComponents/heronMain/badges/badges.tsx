import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledBadge = styled(motion.div)`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 25%;
  left: 35%;
  font-weight: 600;
`;
