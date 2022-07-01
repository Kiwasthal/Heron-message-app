import { useAppSelector } from '../../../app/hooks';
import { StyledPrivateMessangerContainer } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';
import ChatBar from './ChatBar';
import MessangerPanel from './MessagerPanel';

const PrivateMessanger = () => {
  // const userFriends = useAppSelector(
  //   state => state.private.acceptedUserFriends
  // );
  const activePanel = useAppSelector(state => state.private.activePanel);

  return (
    <StyledPrivateMessangerContainer>
      <ChatBar />
      <MessangerPanel />
    </StyledPrivateMessangerContainer>
  );
};

export default PrivateMessanger;
