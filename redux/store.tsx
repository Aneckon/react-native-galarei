import { configureStore } from '@reduxjs/toolkit';
import { photoApi } from './services/photoApi';
import photoReducer from './slice/photoSlice';

export const store = configureStore({
  reducer: { photoReducer, [photoApi.reducerPath]: photoApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
