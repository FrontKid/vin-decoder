import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_NHTSA_API }),
  endpoints: () => ({}),
});

export { baseApi };
