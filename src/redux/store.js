import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from './contactsApi';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});
