import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {},
  movies: []
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateMovies: (state, action) => {
      state.movies = action.payload;
    }
  },
});

export const { login, logout, updateMovies } = authSlice.actions;

export default authSlice.reducer;
