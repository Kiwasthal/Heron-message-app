import {
  StyledInput,
  dropInName,
} from '../../../styledComponents/landingPage/inputs/styledInputs';

export const UserNameInput = () => {
  return (
    <StyledInput
      variants={dropInName}
      initial="hidden"
      animate="visible"
      exit="exit"
      type="text"
      placeholder="User Name"
    />
  );
};
