import { collection, query, where } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAppDispatch } from '../../../app/hooks';
import { getCurrentChatRoomId } from '../../../features/messanger/privateSlice';
import { db } from '../../../firebase/firebase';
import {
  StyledChatBarCard,
  StyledFriendTag,
} from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type FriendChatCardProps = {
  info: string;
  chatId: string;
};

export const FriendChatBarCard = (props: FriendChatCardProps) => {
  const q = query(
    collection(db, `users`),
    where('__name__', '==', `${props.info}`)
  );
  const [friendInfo] = useCollectionData(q);

  const dispatch = useAppDispatch();
  const addCurrentChattersToShop = () => {
    if (friendInfo) dispatch(getCurrentChatRoomId(`${props.chatId}`));
  };

  const handleFriendIconClicked = () => {
    addCurrentChattersToShop();
  };

  return (
    <StyledChatBarCard onClick={handleFriendIconClicked}>
      {friendInfo && <StyledFriendTag src={friendInfo[0].photoURL} />}
    </StyledChatBarCard>
  );
};
