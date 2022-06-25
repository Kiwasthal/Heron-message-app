import { configureStore } from '@reduxjs/toolkit';
import manualSlice from '../features/user/manualSlice';
import userSlice from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    manual: manualSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
