import axios from "axios";
import CONST from "../utils/constant";

const config = {
	baseURL: CONST.BASE_URL,
	headers: {
		'content-Type': 'application/json',
		"x-hasura-admin-secret": CONST.KEY,
	},
};

const axiosInstance = axios.create(config);
export default axiosInstance;