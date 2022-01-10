import { createSlice, createAction } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: new Date().getTime(),
        name: action.payload,
      })
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase('REMOVE_USER_CUSTOM', (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload
      })
    })
  },
})

export const removeUserExtra = createAction('REMOVE_USER')
export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer
