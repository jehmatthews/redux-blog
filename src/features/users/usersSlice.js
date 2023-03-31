import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: 'Luke Skywalker'},
  {id: '1', name: 'Frodo Baggins'},
  {id: '2', name: 'Randy Lahey'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer