import { collection, limit, orderBy, query } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAppSelector } from '../../../app/hooks';
import { db } from '../../../firebase/firebase';
import { StyledChatBox } from '../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';
import ReceivedMessage from './messages/ReceivedMessage';
import SentMessage from './messages/SentMessage';

const ChatBox = () => {
  const chatRoom = useAppSelector(state => state.private.currentChatroom);
  const userEmail = useAppSelector(state => state.user.userEmail);

  let q = query(
    collection(db, `privateMessages/${chatRoom}/messages`),
    orderBy('timestamp', 'desc'),
    limit(20)
  );

  const [messages] = useCollectionData(q);

  return (
    <StyledChatBox>
      {messages &&
        messages.length > 0 &&
        messages.map(message => {
          if (message.email === userEmail)
            return (
              <SentMessage
                key={message.id}
                text={message.text}
                image={message.profilePicUrl}
                name={message.name}
              />
            );
          else
            return (
              <ReceivedMessage
                key={message.id}
                text={message.text}
                image={message.profilePicUrl}
                name={message.name}
              />
            );
        })}
    </StyledChatBox>
  );
};

export default ChatBox;
