import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slice/profileSlice.ts';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
