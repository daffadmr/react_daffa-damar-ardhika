import axiosInstance from "../configs/axiosInstance";

const TodoAPI = {
  async getAllTodo() {
    try {
      const response = await axiosInstance.get("/");
      return response;
    } catch (error) {
      console.log(error.message)
    }
  },

  async createTodos(data) {
    try {
      const response = await axiosInstance.post("/", data);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },

  async deleteTodo(id) {
    try {
      const response = await axiosInstance.delete(`${id}`)
      return response
    } catch (error) {
      console.log(error.message)
    }
  },

  async completeTodo(data) {
    try {
      const response = await axiosInstance.put(`${data.id}`, {
        id: data.id,
        changes: {completed: !data.completed}
      })
      console.log(response.data)
      return response
    } catch (error) {
      console.log(error.message)
    }
  }
};

export default TodoAPI;