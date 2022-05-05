import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  completed: boolean;
  name: string;
}

export interface TodoState {
  todos: Task[];
}

const initialState: TodoState = {
  todos: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTask: Task = { name: action.payload, completed: false };
      state.todos.push(newTask);
      console.log("new task");
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].completed = !state.todos[action.payload]
        .completed;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTask, toggleTask } = todoSlice.actions;

export default todoSlice.reducer;
