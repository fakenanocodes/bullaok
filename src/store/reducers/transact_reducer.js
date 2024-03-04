import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transact',
  initialState: {
    withdrawal: false,
    deposit: false,
    transfer: false,
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
  },
});

export const { setWithDrawal, setDeposite, setTransfer } =
  transactionSlice.actions;

export default transactionSlice.reducer;
