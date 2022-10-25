import axiosInstance from "../configs/axiosInstance";

const CustomerAPI = {
  async getAllCustomers() {
    try {
      const response = await axiosInstance.get("/");
      return response;
    } catch (error) {
      console.log(error.message)
    }
  }
}

export default CustomerAPI;