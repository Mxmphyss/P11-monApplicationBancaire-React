import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  firstName: '',
  lastName: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    updateUserInfo: (state, action) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { setUserInfo, updateUserInfo } = userReducer.actions;

export default userReducer.reducer;