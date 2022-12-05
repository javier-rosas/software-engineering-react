/**
 * @file implements userSlice
 */
 import { createSlice } from '@reduxjs/toolkit'
 
 
 // initial state
 const initialState = {
   user: null,
   status: 'idle',
   error: null
 }
 
 /**
  * User slice with reducers. 
  */
 export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
    signin: (state, action) => {
      state.user = action.payload
    }
  },
 })
 
 
// action selector
export const { signin } = userSlice.actions

 // state selector
 export const selectUser = (state) => state.user.user

 // reducer
 export default userSlice.reducer
 