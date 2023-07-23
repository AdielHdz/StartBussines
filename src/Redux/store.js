import { configureStore } from '@reduxjs/toolkit'
import User from './Fetching/UsersSlice/UserSlice'
export const store = configureStore({
  reducer: {
    user: User
  },
})