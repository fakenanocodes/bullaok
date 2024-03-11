import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transact',
  initialState: {
    withdrawal: false,
    deposit: false,
    transfer: false,
    userDetails: {},
    // allUserDetails: {},
  },

  reducers: {
    setWithDrawal: (state, action) => {
      state.withdrawal = action.payload;
    },
    setDeposite: (state, action) => {
      state.deposit = action.payload;
    },
    setTransfer: (state, action) => {
      state.transfer = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    // setAllUserDetails: (state, action) => {
    //   state.allUserDetails = action.payload;
    // },
  },
});

export const {
  setWithDrawal,
  setDeposite,
  setTransfer,
  setUserDetails,
  // setAllUserDetails,
} = transactionSlice.actions;

export default transactionSlice.reducer;
