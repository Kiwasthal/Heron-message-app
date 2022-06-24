import {
  StyledSignModal,
  dropLeft,
} from '../../styledComponents/landingPage/signModal';

type SignModalProps = {
  children: React.ReactNode;
};

export const SignModal = ({ children }: SignModalProps) => {
  return (
    <StyledSignModal
      variants={dropLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledSignModal>
  );
};

export default SignModal;
