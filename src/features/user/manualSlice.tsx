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
import { FirebaseError } from 'firebase/app';

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

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export const signUp = createAsyncThunk<void, UserSignUpProps>(
  'user/signUp',
  async ({ email, password, name }, { rejectWithValue }) => {
    let updateUserInfo = {
      displayName: name,
      photoURL: placeholderImage,
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser !== null && auth.currentUser.email !== null)
        await updateProfile(auth.currentUser, updateUserInfo).catch(error =>
          console.error(error)
        );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (userData: UserLogInProps, { rejectWithValue }) => {
    const { email, password } = userData;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      if (error instanceof FirebaseError && 'code' in error)
        return rejectWithValue(error.code.toString());
    }
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
