import {
  StyledGithubButton,
  dropIn,
} from '../../../styledComponents/landingPage/buttons/githubButton';

export type GithubButtonProps = {
  children: string;
};

export const LogInWithGithubButton = ({ children }: GithubButtonProps) => {
  return (
    <StyledGithubButton
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {' '}
      {children}
    </StyledGithubButton>
  );
};
