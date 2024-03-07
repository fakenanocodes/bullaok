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
  },
});

export const { setCardStep, setCardInformation } = cardSlice.actions;

export default cardSlice.reducer;
