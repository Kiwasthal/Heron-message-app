import { AnimationControls } from 'framer-motion';
import { AnimatedThemeSelection } from '../../../../styledComponents/heronMain/nav/dropmenus/StyledDropMenus';

type ThemeSelectionProps = {
  text: string;
  value: AnimationControls;
  starting: number;
  action: () => void;
};

const ThemeSelection = (props: ThemeSelectionProps) => {
  return (
    <AnimatedThemeSelection
      custom={props.starting}
      animate={props.value}
      onClick={props.action}
    >
      {props.text}
    </AnimatedThemeSelection>
  );
};

export default ThemeSelection;
