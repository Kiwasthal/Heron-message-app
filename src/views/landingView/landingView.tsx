import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LandingHolder from '../../components/landing/LandingHolder';
import SignModal from '../../components/landing/SignModal';
import SignInWrapper from '../../components/landing/SignInWrapper';
import { UserNameInput } from '../../components/landing/inputs/UserNameInput';
import { UserEmailInput } from '../../components/landing/inputs/UserEmailInput';
import { SignInButton } from '../../components/buttons/SignInButton';

type SignInProps = {
  handleClick: () => void;
};

const LeaveButton = (props: SignInProps) => {
  return <button onClick={props.handleClick}>Leave</button>;
};

function LandingView() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const changeToSignUp = () => setIsVisible(false);
  return (
    <LandingHolder>
      <SignModal>
        <AnimatePresence>
          {isVisible && (
            <SignInWrapper>
              <h1>Sign In</h1>
              <UserNameInput />
              <UserEmailInput />
              <SignInButton>Sign In</SignInButton>
              <p>Haven't signed up?</p>
              <LeaveButton handleClick={changeToSignUp} />
            </SignInWrapper>
          )}
          {!isVisible && (
            <motion.div key="signUpModal">
              <input type="text" placeholder="username" />
              <input type="email" placeholder="email" />
              <p>Haven't signed up?</p>
              <LeaveButton handleClick={changeToSignUp} />
            </motion.div>
          )}
        </AnimatePresence>
      </SignModal>
    </LandingHolder>
  );
}

export default LandingView;
