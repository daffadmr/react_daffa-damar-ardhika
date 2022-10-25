import axios from "axios";
import CONST from "../util/constants";

const config = {
	baseURL: CONST.BASE_URL,
	headers: {
		"x-hasura-admin-secret": CONST.API_KEY
	},
};

const axiosInstance = axios.create(config);
export default axiosInstance;