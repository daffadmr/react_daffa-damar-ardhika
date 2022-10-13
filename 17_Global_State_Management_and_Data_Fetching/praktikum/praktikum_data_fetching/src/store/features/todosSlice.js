import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TodoAPI from "../../apis/todoApi";

const initialState = {
	data: [],
	fetchStatus: false
};

export const fetchTodos = createAsyncThunk("fetch/todos", async () => {
	try {
		const response = await TodoAPI.getAllTodo();
		return response.data.todoList_Todos;
	} catch (error) {
		console.log(error.message);
	}
});

export const createTodo = createAsyncThunk("create/todos", async (data) => {
	try {
		const response = await TodoAPI.createTodos(data);
		return response.data.insert_todoList_Todos.returning[0]
	} catch (error) {
		console.log(error.message);
	}
});

export const deleteTodo = createAsyncThunk("delete/todos", async (id) => {
	try {
		const response = await TodoAPI.deleteTodo(id)
		return response.data.delete_todoList_Todos.returning[0]
	} catch (error) {
		console.log(error.message)
	}
});

export const completeTodo = createAsyncThunk('complete/todo', async (data) => {
	try {
		const response = await TodoAPI.completeTodo(data)
		console.log(response.data.update_todoList_Todos)
		return response
	} catch (error) {
		console.log(error.message)
	}
})

const todosSlice = createSlice({
	name: "todos",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(createTodo.fulfilled, (state, action) => {
				state.data.push(action.payload);
				state.fetchStatus = !state.fetchStatus;
			})
			.addCase(completeTodo.fulfilled, (state, action) => {
				state.fetchStatus = !state.fetchStatus;
			})
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.fetchStatus = !state.fetchStatus
				state.data = state.data.filter((item) => item.id !== action.payload.id)
			});
	}
})

export default todosSlice.reducer