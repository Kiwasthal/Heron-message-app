import { dropInTitle } from '../../../styledComponents/landingPage/text/signInHeader';
import { TextHolder } from '../../../styledComponents/landingPage/text/textHolder';

export type SignInTextProps = {
  children: string;
};

export const SignTextHolder = ({ children }: SignInTextProps) => {
  return (
    <TextHolder
      variants={dropInTitle}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </TextHolder>
  );
};
