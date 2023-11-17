import { baseApi } from '../../../app/baseApi';

export const groupsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => '/api/groups',
    }),
    getMyGroups: builder.query({
      query: () => '/api/my-groups',
    }),
    getReasons: builder.query({
      query: () => 'api/reasons',
    }),
    getGroupsId: builder.query({
      query: (id) => `/api/groups/${id}`,
    }),
    getStudentsId: builder.query({
      query: (id) => `/api/students/${id}`,
    }),
    changeStudent: builder.mutation({
      query: (id, body) => ({
        body: body,
        url: `/api/students/${id}`,
        method: 'PUT',
      }),
    }),
    getStudentsIdHistory: builder.query({
      query: (id) => `/api/students/${id}/history`,
    }),
  }),
  overrideExisting: false,
});
