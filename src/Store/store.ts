import { configureStore } from '@reduxjs/toolkit';
import {registration } from '../_reducers/registration.reducer'
import {authentication } from '../_reducers/authentication.reducer'

export const store =  configureStore({
  reducer: {
   // authentication,
    registration,
  },
})