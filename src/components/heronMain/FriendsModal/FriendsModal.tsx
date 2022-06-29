import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { closeFriendsModal } from '../../../features/nav/navSlice';
import {
  StyledFriendsModal,
  dropFmodal,
} from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';
import { CloseFriendsModal } from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';

const FriendsModal = () => {
  const isShowing = useAppSelector(state => state.nav.friendsModal);
  const dispatch = useAppDispatch();
  const closeModal = () => dispatch(closeFriendsModal());
  return (
    <AnimatePresence>
      {isShowing && (
        <StyledFriendsModal
          variants={dropFmodal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeModal}
        >
          <CloseFriendsModal>+</CloseFriendsModal>
        </StyledFriendsModal>
      )}
    </AnimatePresence>
  );
};

export default FriendsModal;
