import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  value: number;
}

const initialState: UserState = {
  value: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserState: () => initialState,
  },
});

export const {clearUserState} = userSlice.actions;

export default userSlice.reducer;
