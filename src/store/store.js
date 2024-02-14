import { configureStore } from "@reduxjs/toolkit";
import toDosReducer from "./toDoSlice";

export default configureStore({
  reducer: {
    toDos: toDosReducer,
  },
});
