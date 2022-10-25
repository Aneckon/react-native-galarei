import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = 'https://api.unsplash.com/photos';

export const photoApi = createApi({
  reducerPath: 'photoApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPhoto: builder.query({
      query: () => "?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
    }),
  }),
});

export const { useGetPhotoQuery } = photoApi;
