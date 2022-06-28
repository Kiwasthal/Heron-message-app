import { StyledGlobalMessageView } from '../../../styledComponents/heronMain/globalMessanger/styledGlobalMessanger';
import { useFetchGlobalMessagesQuery } from '../../../features/api/firebaseApi';

const GlobalMessageView = () => {
  const { data, error } = useFetchGlobalMessagesQuery();
  console.log(data);
  return (
    <StyledGlobalMessageView>
      {data && data.map(message => <div key={message.id}>{message.text}</div>)}
    </StyledGlobalMessageView>
  );
};

export default GlobalMessageView;
