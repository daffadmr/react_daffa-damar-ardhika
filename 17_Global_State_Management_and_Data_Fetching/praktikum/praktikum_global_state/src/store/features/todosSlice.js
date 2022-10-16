import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const initialState = data;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    newTodo: (state, action) => {
      state = [
        ...state,
        {
          id: Math.floor(Math.random() * 1000),
          title: action.payload,
          completed: false,
        },
      ];
      return state;
    },

    handleDelete: (state, action) => {
      const id = action.payload

      const newTodoList = state.filter((item) => {
        return item.id !== id;
      });
      return state = newTodoList;
    },

    handleCheckbox: (state, action) => {
      let checkedTodo = state.map((data) =>
        data.id === action.payload ? { ...data, completed: !data.completed } : data
      );
      return checkedTodo;
    }
  }
})

export const { newTodo, handleDelete, handleCheckbox } = todosSlice.actions
export default todosSlice.reducer