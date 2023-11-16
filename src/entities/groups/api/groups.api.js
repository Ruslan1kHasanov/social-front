import { baseApi } from '../../../app/baseApi';

export const groupsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => '/groups',
    }),
    getMyGroups: builder.query({
      query: () => '/my-groups',
    }),
    getBooks: builder.query({
      query: () => '/api/books',
    }),
  }),
  overrideExisting: false,
});
