import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DocumentData } from 'firebase/firestore';

type FriendArrayProps = {
  name?: string;
  email: string;
  status: boolean;
};

type InitialStateProps = {
  friendInput: null | string;
  userFriends: [] | FriendArrayProps[];
  acceptedUserFriends: [] | FriendArrayProps[];
};

const initialState: InitialStateProps = {
  friendInput: null,
  userFriends: [],
  acceptedUserFriends: [],
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
  },
});

export default privateSlice.reducer;
export const {
  getFriendInput,
  getUserPendingFriendList,
  getUserAcceptedFriendList,
} = privateSlice.actions;
