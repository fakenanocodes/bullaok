import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cardStep: 0,
    cardInformation: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      currency: '',
      type: '',
    },
  },
  reducers: {
    setCardStep: (state, action) => {
      state.cardStep = action.payload;
    },
    setCardInformation: (state, action) => {
      state.cardInformation = action.payload;
    },
    resetCardInformation: (state) => {
      state.cardInformation = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        currency: '',
        type: '',
      };
    },
  },
});

export const { setCardStep, setCardInformation, resetCardInformation } = cardSlice.actions;

export default cardSlice.reducer;
