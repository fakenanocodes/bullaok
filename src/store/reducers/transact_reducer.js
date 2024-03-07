import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transact',
  initialState: {
    withdrawal: false,
    deposit: false,
    transfer: false,
    userDetails: {},
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
  },
});

export const { setWithDrawal, setDeposite, setTransfer, setUserDetails } =
  transactionSlice.actions;

export default transactionSlice.reducer;
