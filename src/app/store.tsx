import { configureStore } from '@reduxjs/toolkit';
import manualSlice from '../features/user/manualSlice';
import userSlice from '../features/user/userSlice';
import navSlice from '../features/nav/navSlice';
import globalSlice from '../features/messanger/globalSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    manual: manualSlice,
    nav: navSlice,
    global: globalSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
