import { configureStore } from '@reduxjs/toolkit';

// すべてのコンポーネントからアクセス可能なstoreと呼ばれる場所を作成する
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
