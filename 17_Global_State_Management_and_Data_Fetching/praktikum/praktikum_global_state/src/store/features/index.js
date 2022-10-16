import { combineReducers } from "redux";
import todos from "./todosSlice"

const rootReducer = combineReducers({
  todos: todos
})

export default rootReducer;