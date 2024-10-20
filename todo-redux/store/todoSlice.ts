import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: state.todos.length + 1, text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;