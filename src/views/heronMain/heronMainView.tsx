import HeronMainHolder from '../../components/heronMain/HeronMainHolder';
import Navbar from '../../components/heronMain/Navbar/Navbar';
import { UserContainer } from '../../components/heronMain/Navbar/UserContainer/UserContainer';
import Footer from '../../components/heronMain/Footer/Footer';
import { UserImage } from '../../components/heronMain/Navbar/UserContainer/UserImage';
import { UserNameHolder } from '../../components/heronMain/Navbar/UserContainer/UserNameHolder';

const HeronMainView = () => {
  return (
    <HeronMainHolder>
      <Navbar>
        <UserContainer>
          <UserNameHolder />
          <UserImage />
        </UserContainer>
      </Navbar>
      <Footer>
        <div>Hey </div>
      </Footer>
    </HeronMainHolder>
  );
};

export default HeronMainView;
