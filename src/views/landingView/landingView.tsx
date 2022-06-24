import { LandingHolder } from '../../styledComponents/landingPage/landingHolder';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SignInButton } from '../../components/buttons/SignInButton';
import { SignModal } from '../../styledComponents/landingPage/signModal';

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
            <motion.div key="signInModal">
              <h1>Sign In</h1>
              <input type="text" placeholder="username" />
              <input type="email" placeholder="email" />
              <SignInButton>Sign In</SignInButton>
              <p>Haven't signed up?</p>
              <LeaveButton handleClick={changeToSignUp} />
            </motion.div>
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
