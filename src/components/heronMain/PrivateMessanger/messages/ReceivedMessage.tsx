import {
  StyledMessage,
  StyledMessageAvatar,
  StyledMessageInnerReversed,
  StyledMessageOuterReversed,
  StyledNameSpan,
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
          <StyledReceivedBubble>
            <StyledNameSpan> {props.name} : </StyledNameSpan>
            {props.text}
          </StyledReceivedBubble>
        </StyledMessageInnerReversed>
      </StyledMessageOuterReversed>
    </StyledMessage>
  );
};

export default ReceivedMessage;
