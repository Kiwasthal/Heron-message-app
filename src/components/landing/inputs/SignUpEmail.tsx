import {
  StyledInput,
  dropInEmail,
} from '../../../styledComponents/landingPage/inputs/styledInputs';

export const SignUpEmailInput = () => {
  return (
    <StyledInput
      variants={dropInEmail}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="text"
      placeholder="User Email"
    />
  );
};