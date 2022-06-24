import {
  StyledLandingHolder,
  fadeIn,
} from '../../styledComponents/landingPage/landingHolder';

type LandingProps = {
  children: React.ReactNode;
};

export const LandingHolder = ({ children }: LandingProps) => {
  return (
    <StyledLandingHolder
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledLandingHolder>
  );
};

export default LandingHolder;
