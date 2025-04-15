import { configureStore } from "@reduxjs/toolkit/react";
import authReducer from "./features/auth/auth-slice";
import chatReducer from "./features/chat/chat-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
