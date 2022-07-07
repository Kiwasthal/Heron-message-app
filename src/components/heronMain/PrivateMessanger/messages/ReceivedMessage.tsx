import {
  StyledMessage,
  StyledMessageAvatar,
  StyledMessageInnerReversed,
  StyledMessageOuterReversed,
  StyledReceivedBubble,
} from '../../../../styledComponents/heronMain/privateMessanger/styledPrivateMessanger';

type MessageProps = {
  text: string;
  name: string;
  image: string;
};

const ReceivedMessage = (props: MessageProps) => {
  return (
    <StyledMessage>
      <StyledMessageOuterReversed>
        <StyledMessageAvatar img={props.image} />
        <StyledMessageInnerReversed>
          <StyledReceivedBubble>{props.text}</StyledReceivedBubble>
        </StyledMessageInnerReversed>
      </StyledMessageOuterReversed>
    </StyledMessage>
  );
};

export default ReceivedMessage;
