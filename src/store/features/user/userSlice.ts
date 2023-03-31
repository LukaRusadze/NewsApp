import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  value: number;
}

const initialState: UserState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserState: () => initialState,
  },
});

export const {clearUserState} = counterSlice.actions;

export default counterSlice.reducer;
