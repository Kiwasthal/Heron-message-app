import { auth } from '../../firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';
import placeholderImage from '../../assets/userPlaceHolder.svg';

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
  photoURL: undefined | null | string;
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, password, name }: UserSignUpProps) => {
    let updateUserInfo = {
      displayName: name,
      photoURL: placeholderImage,
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser !== null)
        await updateProfile(auth.currentUser, updateUserInfo).catch(err =>
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

export const logOut = createAsyncThunk('user/logOut', async () => {
  await signOut(auth);
});

export const catalogueUser = createAsyncThunk(
  'user/catalogue',
  async ({ email, name, photoURL }: CatalogueUserProps) => {
    await setDoc(doc(db, 'users', `${email}`), {
      name: name,
      email: email,
      photoURL: photoURL,
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
