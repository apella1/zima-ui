import { baseApi } from "../api/base-api";
import type { Therapist } from "@/types/therapist";

export const therapistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    therapists: builder.query<Therapist[], void>({
      query: () => "/therapists",
    }),
    therapistById: builder.query<Therapist, string>({
      query: (id) => `/therapists/${id}`,
    }),
  }),
});

export const { useTherapistsQuery, useTherapistByIdQuery } = therapistApi;
