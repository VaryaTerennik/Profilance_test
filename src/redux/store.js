import { configureStore } from "@reduxjs/toolkit";
import newssliceReducer from "./NewsSlice";
import userssliceReducer from "./UsersSlice";

export const store = configureStore({
  reducer: {
    newslist: newssliceReducer,
    userslist: userssliceReducer,
  },
});
