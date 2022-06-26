import { auth } from '../../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

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

type UserSignUpProps = {
  email: string;
  password: string;
  name: string;
};

type UserLogInProps = {
  email: string;
  password: string;
};

type CatalogueUserProps = {
  email: undefined | null | string;
  name: undefined | null | string;
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, password, name }: UserSignUpProps) => {
    let updateDisplayName = {
      displayName: name,
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser !== null)
        await updateProfile(auth.currentUser, updateDisplayName).catch(err =>
          console.log(err)
        );
    } catch (err) {
      return 'Something went wrong';
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async ({ email, password }: UserLogInProps) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
);

export const catalogueUser = createAsyncThunk(
  'user/catalogue',
  async ({ email, name }: CatalogueUserProps) => {
    const userCollection = collection(db, 'users');
    await addDoc(userCollection, {
      name: name,
      email: email,
    });
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
