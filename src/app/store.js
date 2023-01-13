import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import loginReducer from '../features/login/loginSlice.js';

// Aquí ya se pueden poner todos los reducers que tengamos
export const store = configureStore({
  reducer: {
    logged: loginReducer,
  },
});
