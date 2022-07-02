import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FriendArrayProps = {
  name?: string;
  email: string;
  chatId: string;
  status: boolean;
};

type InitialStateProps = {
  friendInput: null | string;
  userFriends: [] | FriendArrayProps[];
  acceptedUserFriends: [] | FriendArrayProps[];
  currentChatroom: string | null;
  activePanel: null | string;
  currentMessageText: string | null;
};

const initialState: InitialStateProps = {
  friendInput: null,
  userFriends: [],
  acceptedUserFriends: [],
  currentChatroom: null,
  activePanel: null,
  currentMessageText: null,
};

const privateSlice = createSlice({
  name: 'private',
  initialState,
  reducers: {
    clearPrivate: state => {},
    getFriendInput: (state, action: PayloadAction<string>) => {
      state.friendInput = action.payload;
    },
    getUserPendingFriendList: (state, action) => {
      state.userFriends = action.payload;
    },
    getUserAcceptedFriendList: (state, action) => {
      state.acceptedUserFriends = action.payload;
    },
    getCurrentChatRoomId: (state, action: PayloadAction<string>) => {
      state.currentChatroom = action.payload;
    },
    setActivePanel: (state, action) => {
      state.activePanel = action.payload;
    },
    storeCurrentTextValue: (state, action: PayloadAction<string>) => {
      state.currentMessageText = action.payload;
    },
    logout: state => {
      state = initialState;
    },
  },
});

export default privateSlice.reducer;
export const {
  getFriendInput,
  getUserPendingFriendList,
  getUserAcceptedFriendList,
  getCurrentChatRoomId,
  storeCurrentTextValue,
  clearPrivate,
} = privateSlice.actions;
