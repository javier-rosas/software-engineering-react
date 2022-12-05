/**
 * @file Implements store
 */

//  import { configureStore } from '@reduxjs/toolkit'
//  import userReducer from "./userSlice"
 
//  // redux store aggregates all reducers into one
//  export const store = configureStore({
//    reducer: {
//      user: userReducer
//    }
//  })

// configureStore.js
 
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './index'
 
const persistConfig = {
  key: 'root',
  storage
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const persistor = persistStore(store)

