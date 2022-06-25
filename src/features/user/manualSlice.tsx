import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  userNameInput: string;
  userEmailInput: string;
  userPasswordInput: string;
  userConfirmPassword: string;
};

const initialState: InitialState = {
  userEmailInput: '',
  userPasswordInput: '',
  userNameInput: '',
  userConfirmPassword: '',
};

export const signUp = createAsyncThunk('user/signUp', async () => {
  await createUserWithEmailAndPassword(
    auth,
    'imthekoul@gmail.com',
    'imthekoul@gmail.com'
  );
});

const manualSlice = createSlice({
  name: 'manual',
  initialState,
  reducers: {
    getNameInput: (state, action: PayloadAction<string>) => {
      state.userNameInput = action.payload;
    },
    getEmailInput: (state, action: PayloadAction<string>) => {
      state.userEmailInput = action.payload;
    },
    getPasswordInput: (state, action: PayloadAction<string>) => {
      state.userPasswordInput = action.payload;
    },
    getConfirmationPasswordInput: (state, action: PayloadAction<string>) => {
      state.userConfirmPassword = action.payload;
    },
  },
});

export default manualSlice.reducer;
export const {
  getNameInput,
  getEmailInput,
  getPasswordInput,
  getConfirmationPasswordInput,
} = manualSlice.actions;
