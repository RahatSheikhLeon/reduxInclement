import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ]

const countersSlice = createSlice({
    name: "counters",
    initialState,
    reducers: {
        incriment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)
            state[counterIndex].value++;
        },
        dicriment: (state, action) => {
            const counterIndex = state.findIndex(c => c.id === action.payload)
            state[counterIndex].value--;
        },
    }
})

export default countersSlice.reducer;
export const {incriment, dicriment} = countersSlice.actions;