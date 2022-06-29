import { StyledGlobalMessageView } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import GlobalMessageField from './GlobalMessageField';
import { db } from '../../../firebase/firebase';
import { RefObject } from 'react';

type GlobalMessageProps = {
  scroll: RefObject<HTMLDivElement>;
};

const GlobalMessageView = (props: GlobalMessageProps) => {
  let q = query(
    collection(db, 'globalMessages'),
    orderBy('timestamp', 'desc'),
    limit(20)
  );
  const [recentMessages] = useCollectionData(q);

  return (
    <StyledGlobalMessageView>
      {recentMessages &&
        recentMessages
          .reverse()
          .map((message, index) => (
            <GlobalMessageField
              key={message.id}
              text={message.text}
              image={message.profilePicUrl}
              name={message.name}
              timestamp={message.timestamp}
            />
          ))}
      <div ref={props.scroll}></div>
    </StyledGlobalMessageView>
  );
};

export default GlobalMessageView;
