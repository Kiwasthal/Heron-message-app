import {
  StyledGoogleButton,
  dropIn,
} from '../../../styledComponents/landingPage/buttons/googleButton';

export type GoogleButtonProps = {
  children: string;
};

export const LogInWithGoogleButton = ({ children }: GoogleButtonProps) => {
  return (
    <StyledGoogleButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledGoogleButton>
  );
};
