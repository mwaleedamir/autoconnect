import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    getFilteredCars: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();
        Object.entries(filters).forEach(([key, value]) => {
          if (value && value.length > 0) {
            params.append(key, Array.isArray(value) ? value.join(',') : value);
          }
        });
        return `/filter?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetFilteredCarsQuery } = carApi;
