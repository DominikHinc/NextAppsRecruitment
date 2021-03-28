import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const COUNTER_MAX_VALUE = 100;
export const COUNTER_MIN_VALUE = 0;

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      if (state.value < COUNTER_MAX_VALUE) {
        state.value += 1;
      }
    },
    decrement: state => {
      if (state.value > COUNTER_MIN_VALUE) {
        state.value -= 1;
      }
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const counterReducer = counterSlice.reducer;
