import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    pc:0
  },
  reducers: {
    increment: (state) => {
      console.log("increment action")
      state.pc =state.value;
      state.value += 1;
      
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
})
export const selectCounter = (state:any) => state.counter
export const {increment, decrement, incrementByAmount}= counterSlice.actions
export default counterSlice.reducer;