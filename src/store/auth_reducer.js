import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentSignupEmail: null,
    userData: {},
    otp: null,
  },

  reducers: {
    setCurrentSignupEmail: (state, action) => {
      state.currentSignupEmail = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setCurrentSignupEmail, setOtp, setUserData } = authSlice.actions;

export default authSlice.reducer;
