import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import { catReducer } from "./catSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cat: catReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;