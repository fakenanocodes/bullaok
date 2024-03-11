import { createSlice } from '@reduxjs/toolkit';

export const kycSlice = createSlice({
  name: 'kyc',
  initialState: {
    userDetails: {},
  },

  reducers: {
    setUserDetails: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserDetails } = kycSlice.actions;

export default kycSlice.reducer;
