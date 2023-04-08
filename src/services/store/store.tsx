import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userSliceReducer } from './slices'
import { dupacoManagementApi } from '../api'

const rootReducer = combineReducers({
  user: userSliceReducer,
  [dupacoManagementApi.reducerPath]: dupacoManagementApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dupacoManagementApi.middleware),
})

export const storeFactory = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dupacoManagementApi.middleware),
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
