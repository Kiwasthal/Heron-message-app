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
  loading: boolean;
};

const initialState: InitialStateProps = {
  friendInput: null,
  userFriends: [],
  acceptedUserFriends: [],
  currentChatroom: null,
  activePanel: null,
  currentMessageText: null,
  loading: false,
};

const privateSlice = createSlice({
  name: 'private',
  initialState,
  reducers: {
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
    setPrivateLoadingStart: state => {
      state.loading = true;
    },
    setPrivateLoadinEnd: state => {
      state.loading = false;
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
  setPrivateLoadingStart,
  setPrivateLoadinEnd,
} = privateSlice.actions;
