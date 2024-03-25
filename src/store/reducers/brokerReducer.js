import { createSlice } from '@reduxjs/toolkit';

export const brokerSlice = createSlice({
  name: 'broker',
  initialState: {
    broker: false,
  },

  reducers: {
    toggleBrokerStatus: (state) => {
      state.broker = !state.broker; // Toggle the value of broker
    },
  },
});

export const { toggleBrokerStatus } = brokerSlice.actions;

export default brokerSlice.reducer;
