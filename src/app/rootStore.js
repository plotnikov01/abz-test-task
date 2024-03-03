import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'src/store/app';

export const rootStore = configureStore({
  reducer: {
    app: appReducer,
  },
});
