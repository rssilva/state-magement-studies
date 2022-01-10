import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './users.ts'

export const store = configureStore({
  reducer: {
    users: counterReducer,
  },
})
