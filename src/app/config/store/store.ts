import { authSlice } from '@features/auth'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
