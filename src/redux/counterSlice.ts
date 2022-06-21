import { createSlice } from '@reduxjs/toolkit';
import { Counter } from '../type/counter';

export const counterSlice = createSlice({
  // name: Sliceを識別するための名前を設定する
  name: 'counter',
  // initialState: 共有するデータ(state)の初期値を設定する
  initialState: {
    count: 0,
  },
  // reducers: この中にstateを更新するための関数を設定する
  reducers: {
    increase: (state: Counter) => {
      state.count += 1;
    },
    decrease: (state: Counter) => {
      state.count -= 1;
    },
  },
});

// reducersの中で設定した関数increase, decreaseはredux Toolkitでは自動で同名のAction Creatorを作成します
// Action Creatorをdispatchで指定するためexportして他のコンポーネントからimportできるようにします。
export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
