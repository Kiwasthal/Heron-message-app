import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  userNameInput: string;
  userEmailInput: string;
};

const initialState: InitialState = {
  userNameInput: '',
  userEmailInput: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getNameInput: (state, action: PayloadAction<string>) => {
      state.userNameInput = action.payload;
    },
    getEmailInput: (state, action: PayloadAction<string>) => {
      state.userEmailInput = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { getNameInput, getEmailInput } = userSlice.actions;
