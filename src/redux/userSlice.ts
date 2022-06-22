import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/users';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as User[],
  },
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
