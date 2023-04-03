import {configureStore} from '@reduxjs/toolkit';
import {newsApi} from './features/api/apiSlice';
import {firebaseApi} from './features/firebaseApi/firebaseSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [firebaseApi.reducerPath]: firebaseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([newsApi.middleware, firebaseApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
