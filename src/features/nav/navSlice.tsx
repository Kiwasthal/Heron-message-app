import { defaultTheme, ThemeType } from '../../theme/defaultTheme';
import { lightTheme } from '../../theme/lightTheme';
import { darkTheme } from '../../theme/darkTheme';
import { createSlice } from '@reduxjs/toolkit';
import { seaTheme } from '../../theme/seaTheme';

type InitialStateProps = {
  globalChat: boolean;
  friendsElement: boolean;
  themeElement: boolean;
  friendsModal: boolean;
  chatBar: boolean;
  theme: ThemeType;
};

const initialState: InitialStateProps = {
  globalChat: false,
  friendsElement: false,
  themeElement: false,
  friendsModal: false,
  chatBar: false,
  theme: defaultTheme,
};

const navSlice = createSlice({
  name: ' nav',
  initialState,
  reducers: {
    showGlobalChat: state => {
      state.globalChat = !state.globalChat;
    },
    showFriendsElement: state => {
      state.friendsElement = !state.friendsElement;
    },
    openFriendsModal: state => {
      state.friendsModal = true;
    },
    closeFriendsModal: state => {
      state.friendsModal = false;
    },
    toggleChatBar: state => {
      state.chatBar = !state.chatBar;
    },
    showThemeDropmenu: state => {
      state.themeElement = true;
    },
    hideThemeDropmenu: state => {
      state.themeElement = false;
    },
    closeAllInterfaces: state => {
      state.globalChat = false;
      state.friendsElement = false;
      state.friendsModal = false;
    },
    setThemeDark: state => {
      state.theme = darkTheme;
    },
    setThemeDefault: state => {
      state.theme = defaultTheme;
    },
    setThemeLight: state => {
      state.theme = lightTheme;
    },
    setThemeSea: state => {
      state.theme = seaTheme;
    },
  },
});

export default navSlice.reducer;
export const {
  showGlobalChat,
  showFriendsElement,
  openFriendsModal,
  closeFriendsModal,
  toggleChatBar,
  showThemeDropmenu,
  hideThemeDropmenu,
  setThemeDark,
  setThemeDefault,
  setThemeLight,
  setThemeSea,
} = navSlice.actions;
