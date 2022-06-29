import { AnimatePresence } from 'framer-motion';
import { useAppDispatch } from '../../../../app/hooks';
import { showFriendsElement } from '../../../../features/nav/navSlice';
import { StyledDropContainer } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';
import { AddFriendsElement } from './DropContent';

export const FriendsDropContainer = () => {
  const dispatch = useAppDispatch();
  const clearDisplay = () => dispatch(showFriendsElement());
  return (
    <StyledDropContainer onMouseLeave={clearDisplay}>
      <AnimatePresence>
        <AddFriendsElement />
      </AnimatePresence>
    </StyledDropContainer>
  );
};
