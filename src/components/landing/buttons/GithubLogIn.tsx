import { StyledGithubButton } from '../../../styledComponents/landingPage/buttons/styledButtons';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export type GithubButtonProps = {
  children: string;
};

export const LogInWithGithubButton = ({ children }: GithubButtonProps) => {
  return (
    <StyledGithubButton
      custom={2.6}
      variants={landingElementVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledGithubButton>
  );
};
