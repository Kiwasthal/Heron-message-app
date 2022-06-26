import { auth } from '../../firebase/firebase';
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';

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

type UserSubmitProps = {
  email: string;
  password: string;
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, password }: UserSubmitProps) => {
    await createUserWithEmailAndPassword(auth, email, password);
  }
);

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
