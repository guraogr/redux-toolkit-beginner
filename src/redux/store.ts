import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// すべてのコンポーネントからアクセス可能なstoreと呼ばれる場所を作成する
export const store = configureStore({
  reducer: {
    // 作成したcounterSliceをimportしてreducerに設定します。
    counter: counterReducer,
    // 複数のSliceを作成した場合は作成したSliceをimportしてreducerプロパティのオブジェクトに追加することで
    // 各Sliceで設定したstateをすべてのコンポーネントからアクセスすることが可能になります。
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
