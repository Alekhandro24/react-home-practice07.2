import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const materialsApi = createApi({
  reducerPath: 'materials',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63cb83945c6f2e1d84b73ac6.mockapi.io',
  }),
  tagTypes: ['Materials'],
  endpoints: builder => ({
    getMaterials: builder.query({
      query: () => `materials`,
      providesTags: ['Materials'],
    }),
    getMaterialById: builder.query({
      query: id => `/materials/${id}`,
      providesTags: ['Materials'],
    }),
    addMaterial: builder.mutation({
      query: values => ({
        url: '/materials',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Materials'],
    }),
    deleteMaterial: builder.mutation({
      query: id => ({
        url: `/materials/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Materials'],
    }),
    updateMaterial: builder.mutation({
      query: fields => ({
        url: `/materials/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Materials'],
    }),
  }),
});

export const {
  useGetMaterialsQuery,
  useAddMaterialMutation,
  useDeleteMaterialMutation,
  useGetMaterialByIdQuery,
  useUpdateMaterialMutation,
} = materialsApi;
