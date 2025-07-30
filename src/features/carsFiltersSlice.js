// ../features/carsFiltersSlice.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
      // Add authentication token if available
      const token = getState().userAuth?.token || getState().ownerAuth?.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Car', 'Filter'],
  endpoints: (builder) => ({
    // Get filtered cars (main filtering endpoint)
    getFilteredCars: builder.query({
      query: (filters) => {
        const params = new URLSearchParams();
        
        // Handle different filter types
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            if (Array.isArray(value) && value.length > 0) {
              // For array filters (make, categories, colors, etc.)
              params.append(key, value.join(','));
            } else if (typeof value === 'object' && value.min !== undefined && value.max !== undefined) {
              // For range filters (price, mileage)
              if (value.min !== null && value.min !== '') {
                params.append(`${key}Min`, value.min.toString());
              }
              if (value.max !== null && value.max !== '' && value.max !== Infinity) {
                params.append(`${key}Max`, value.max.toString());
              }
            } else if (typeof value === 'string' || typeof value === 'number') {
              // For single value filters
              params.append(key, value.toString());
            }
          }
        });

        return `/filter?${params.toString()}`;
      },
      providesTags: ['Car'],
      transformResponse: (response) => {
        return {
          cars: response.data || response.cars || response,
          total: response.total || (response.data ? response.data.length : 0),
          page: response.page || 1,
          limit: response.limit || 20,
          totalPages: response.pagination?.totalPages || Math.ceil((response.total || 0) / (response.limit || 20))
        };
      },
    }),

    // Get all cars without filters
    getAllCars: builder.query({
      query: ({ page = 1, limit = 20, sort = 'createdAt', order = 'desc' } = {}) => 
        `/cars?page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
      providesTags: ['Car'],
      transformResponse: (response) => {
        return {
          cars: response.data || response.cars || response,
          total: response.total || (response.data ? response.data.length : 0),
          page: response.page || 1,
          limit: response.limit || 20,
          totalPages: response.totalPages || Math.ceil((response.total || 0) / (response.limit || 20))
        };
      },
    }),

    // Get car by ID
    getCarById: builder.query({
      query: (id) => `/filter/${id}`,
      providesTags: (result, error, id) => [{ type: 'Car', id }],
      transformResponse: (response) => {
        return response.data || response.car || response;
      },
    }),

    // Get cars by showroom
    getCarsByShowroom: builder.query({
      query: ({ showroomId, page = 1, limit = 20, sort = 'createdAt', order = 'desc' }) => 
        `/cars/showroom/${showroomId}?page=${page}&limit=${limit}&sort=${sort}&order=${order}`,
      providesTags: ['Car'],
      transformResponse: (response) => {
        return {
          cars: response.data || response.cars || response,
          total: response.total || (response.data ? response.data.length : 0),
          page: response.page || 1,
          limit: response.limit || 20,
          totalPages: response.totalPages || Math.ceil((response.total || 0) / (response.limit || 20)),
          showroom: response.showroom
        };
      },
    }),

    // Get filter options (for populating dropdowns)
    getFilterOptions: builder.query({
      query: () => '/cars/filter-options',
      providesTags: ['Filter'],
      transformResponse: (response) => {
        return response.data || response;
      },
    }),

    // Search cars by text
    searchCars: builder.query({
      query: ({ searchTerm, page = 1, limit = 20 }) => 
        `/cars/search?q=${encodeURIComponent(searchTerm)}&page=${page}&limit=${limit}`,
      providesTags: ['Car'],
      transformResponse: (response) => {
        return {
          cars: response.data || response.cars || response,
          total: response.total || (response.data ? response.data.length : 0),
          page: response.page || 1,
          limit: response.limit || 20,
          totalPages: response.totalPages || Math.ceil((response.total || 0) / (response.limit || 20)),
          searchQuery: response.searchQuery
        };
      },
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetFilteredCarsQuery,
  useGetAllCarsQuery,
  useGetCarByIdQuery,
  useGetCarsByShowroomQuery,
  useGetFilterOptionsQuery,
  useSearchCarsQuery,
} = carApi;