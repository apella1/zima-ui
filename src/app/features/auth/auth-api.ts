import { baseApi } from "../api/base-api";

interface LoginRequest {
  email: string;
  password: string;
}

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    isEmailVerified: boolean;
    anonymousId: string;
  };
  token: string;
}

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    signup: builder.mutation<AuthResponse, SignupRequest>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
