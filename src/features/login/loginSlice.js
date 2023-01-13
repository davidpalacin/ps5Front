// Aquí ya se definen tanto las actions como los reducers
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.value = true;
    },
    setLoggedOut: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedIn, setLoggedOut } = loginSlice.actions;

export default loginSlice.reducer;
