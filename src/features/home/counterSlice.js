import {createSlice} from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "counter",
  initialState: {counter: 0},
  reducers: {
    increment: (state) => {
      
      state.counter += 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

const {actions, reducer} = homeSlice;
export default reducer;
export const {increment, decrement, incrementByAmount} = actions;
