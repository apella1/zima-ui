import { configureStore } from "@reduxjs/toolkit/react";
import authReducer from "./features/auth/auth-slice";
import chatReducer from "./features/chat/chat-slice";
import { authApi } from "./features/auth/auth-api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
