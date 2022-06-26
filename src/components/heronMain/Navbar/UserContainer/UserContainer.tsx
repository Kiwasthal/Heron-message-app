import { StyledUserContainer } from '../../../../styledComponents/heronMain/nav/userContainer/styledUserContainer';

type UserContainerProps = {
  children: React.ReactNode;
};

export const UserContainer = ({ children }: UserContainerProps) => {
  return <StyledUserContainer>{children}</StyledUserContainer>;
};
