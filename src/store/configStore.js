import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // app reducer contains all the reducers for the application

const store = configureStore({
  reducer: rootReducer,
});
console.log("Initial state: ", store.getState());
export default store;
