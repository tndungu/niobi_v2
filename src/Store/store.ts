import { configureStore, Dispatch } from '@reduxjs/toolkit';
import {registration } from '../_reducers/registration.reducer'
import {authentication } from '../_reducers/authentication.reducer'

export const store =  configureStore({
  reducer: {
   // authentication,
    registration,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// create your own dispatch function reference with custom typings
export const dispatchStore = store.dispatch as typeof store.dispatch;
