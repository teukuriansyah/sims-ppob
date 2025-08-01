import type { PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  dataProfile: any[];
}

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataProfile: "test",
  balance: 1000
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action) => {
      state.dataProfile = action.payload.dataProfile || [];
      state.balance = action.payload.balance || 0;
    }
  }
});

export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;