import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentSignupEmail: null,
    userData: {},
  },

  reducers: {
    setCurrentSignupEmail: (state, action) => {
      state.currentSignupEmail = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {
  setCurrentSignupEmail,
  setUserData,
} = authSlice.actions;

export default authSlice.reducer;
