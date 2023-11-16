import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://cw19869-django-lbq8l.tw1.ru';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});
