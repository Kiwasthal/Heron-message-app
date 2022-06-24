import {
  StyledSignInTitle,
  dropInTitle,
} from '../../../styledComponents/landingPage/text/signInHeader';

export type SignInTitleProps = {
  children: string;
};

export const ModalHeader = ({ children }: SignInTitleProps) => {
  return (
    <StyledSignInTitle
      variants={dropInTitle}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledSignInTitle>
  );
};
