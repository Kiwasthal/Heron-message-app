import {
  StyledSentMessage,
  StyledMessageInfoContainer,
  MessageImage,
  MessageUserName,
  MessageText,
} from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  name: string;
  text: string;
  image: string;
};

const SentMessage = (props: MessageProps) => {
  return (
    <StyledSentMessage>
      <StyledMessageInfoContainer>
        <MessageImage src={props.image} />
        <MessageUserName>{props.name}</MessageUserName>
      </StyledMessageInfoContainer>
      <MessageText>{props.text}</MessageText>
    </StyledSentMessage>
  );
};

export default SentMessage;
