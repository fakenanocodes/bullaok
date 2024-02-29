import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cardStep: 0,
  },

  reducers: {
    setCardStep: (state, action) => {
      state.cardStep = action.payload;
    },
  },
});

export const { setCardStep } = cardSlice.actions;

export default cardSlice.reducer;
