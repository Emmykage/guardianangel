import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://guardian-angel-school.onrender.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (name) => `users`,
    }),
  }),
});

// RTK Query automatically generates a React hook based on your endpoint name
export const { useGetUsersQuery } = baseApi;
