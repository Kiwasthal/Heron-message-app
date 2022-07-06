import { StyledSignInTitle } from '../../../styledComponents/landingPage/text/signInHeader';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export type SignInTitleProps = {
  children: string;
};

export const ModalHeader = ({ children }: SignInTitleProps) => {
  return (
    <StyledSignInTitle
      custom={3}
      variants={landingElementVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledSignInTitle>
  );
};
