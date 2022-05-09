import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627522286d3bc09e106b01fe.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation({
      query: contactid => ({
        url: `contacts/${contactid}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteTodoMutation,
  useAddContactMutation,
} = contactsAPI;
