import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: string;
  email: string;
  username: string;
  isEmailVerified: boolean;
  anonymousId: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: true,
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
