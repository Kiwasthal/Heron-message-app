import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import LandingHolder from '../../components/landing/LandingHolder';
import SignModal from '../../components/landing/SignModal';
import SignInWrapper from '../../components/landing/SignInWrapper';
import SignUpWrapper from '../../components/landing/SignUpWrapper';
import ChangeView from '../../components/landing/ChangeView';
import { ModalHeader } from '../../components/landing/text/ModalHeader';
import { SignInNameInput } from '../../components/landing/inputs/SignInNameInput';
import { SignInEmailInput } from '../../components/landing/inputs/SignInEmailInput';
import { SignInButton } from '../../components/landing/buttons/SignInButton';
import { LogInWithGoogleButton } from '../../components/landing/buttons/GoogleLogInButton';
import { LogInWithGithubButton } from '../../components/landing/buttons/GithubLogIn';
import { SignUpEmailInput } from '../../components/landing/inputs/SignUpEmail';
import { SignUpNameInput } from '../../components/landing/inputs/SignUpName';
import { SignUpButton } from '../../components/landing/buttons/SignUpButton';
import { StyledNavigateWrapper } from '../../styledComponents/landingPage/text/navigatoToSignUpWrapper';
import { SignTextHolder } from '../../components/landing/text/SignTextHolder';

function LandingView() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const changeToSignUp = () => setIsVisible(false);
  const changeToSignIn = () => setIsVisible(true);
  return (
    <LandingHolder>
      <SignModal>
        <AnimatePresence>
          {isVisible && (
            <SignInWrapper key="SignIn">
              <ModalHeader>HERON LOG IN</ModalHeader>
              <SignInNameInput />
              <SignInEmailInput />
              <SignInButton>Sign In</SignInButton>
              <LogInWithGoogleButton>Google</LogInWithGoogleButton>
              <LogInWithGithubButton>Github</LogInWithGithubButton>
              <StyledNavigateWrapper>
                <SignTextHolder>Don't have an accout?</SignTextHolder>
                <ChangeView handleView={changeToSignUp}>Sign Up</ChangeView>
              </StyledNavigateWrapper>
            </SignInWrapper>
          )}
          {!isVisible && (
            <SignUpWrapper key="SignUp">
              <ModalHeader>HERON SIGN UP</ModalHeader>
              <SignUpNameInput />
              <SignUpEmailInput />
              <SignUpButton>Sign Up</SignUpButton>
              <StyledNavigateWrapper>
                <SignTextHolder>Already have an accout?</SignTextHolder>
                <ChangeView handleView={changeToSignIn}>Sign In</ChangeView>
              </StyledNavigateWrapper>
            </SignUpWrapper>
          )}
        </AnimatePresence>
      </SignModal>
    </LandingHolder>
  );
}

export default LandingView;
