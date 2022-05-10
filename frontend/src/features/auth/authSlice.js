import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

// Register new user
export const register = createAsyncThunk('auth/register',
  async (user, thunkAPI) => {
    //console.log(user) comes from dispatch(register(userData)) in Register.jsx
    console.log(user)
  })

export const login = createAsyncThunk('auth/login',
  async (user, thunkAPI) => {
    //console.log(user) comes from dispatch(register(userData)) in Register.jsx
    console.log(user)
  })

  //Login user
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {},
  extraReducers: (builder) => {

  }
})

export default authSlice.reducer