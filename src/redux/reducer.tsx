import { createSlice } from '@reduxjs/toolkit';

export interface State {
  strings: string[];
}

const initialState: State = {
  strings: []
};

export const slice = createSlice({
  name: 'strings',
  initialState,
  reducers: {
    addString: (state, action) => {
      if(!state.strings.includes(action.payload))
      state.strings.push(action.payload);
    },
    deleteString: (state, action) => {
      state.strings = state.strings.filter(str => str !== action.payload);
    },
    clearStrings: (state, action) => {
      state.strings = [];
    },
  }
});

export const { addString, deleteString, clearStrings } = slice.actions;

export const reducer = slice.reducer;
