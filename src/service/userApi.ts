import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/IUser';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' http://localhost:3002' }),
  endpoints: (builder) => ({
    postUser: builder.mutation<IUser, IUser>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query<IUser[], string>({
      query: () => ({
        url: `/users`,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePostUserMutation, useGetUserQuery } = userApi;
