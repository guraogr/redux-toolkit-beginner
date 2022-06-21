import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type/users';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [{}],
  },
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
