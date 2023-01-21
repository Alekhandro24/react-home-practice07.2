import { configureStore } from '@reduxjs/toolkit';
import { materialsApi } from 'components2/redux/materialsSlice';

export const store = configureStore({
  reducer: {
    [materialsApi.reducerPath]: materialsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(materialsApi.middleware),
});

// setupListeners(store.dispatch);
