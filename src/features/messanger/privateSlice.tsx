import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateProps = {
  friendInput: null | string;
};

const initialState: InitialStateProps = {
  friendInput: null,
};

const privateSlice = createSlice({
  name: 'private',
  initialState,
  reducers: {
    getFriendInput: (state, action: PayloadAction<string>) => {
      state.friendInput = action.payload;
    },
  },
});

export default privateSlice.reducer;
export const { getFriendInput } = privateSlice.actions;
