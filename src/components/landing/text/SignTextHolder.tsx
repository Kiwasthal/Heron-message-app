import { TextHolder } from '../../../styledComponents/landingPage/text/textHolder';
import { landingElementVariants } from '../../../styledComponents/landingPage/variants/landingElementsVariants';

export type SignInTextProps = {
  children: string;
};

export const SignTextHolder = ({ children }: SignInTextProps) => {
  return (
    <TextHolder
      custom={2.8}
      variants={landingElementVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </TextHolder>
  );
};
