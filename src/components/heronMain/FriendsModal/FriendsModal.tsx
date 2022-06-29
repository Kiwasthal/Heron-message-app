import {
  StyledFriendsModal,
  dropFmodal,
} from '../../../styledComponents/heronMain/nav/friendsModal/styledFriendsModal';

const FriendsModal = () => {
  return (
    <StyledFriendsModal
      variants={dropFmodal}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></StyledFriendsModal>
  );
};

export default FriendsModal;
