import axios from "axios";
import address from "../config/address";
import { getToken } from "../utils/authService";

//todo IS THIS BASE URL WORKING???
export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    baseURL: `${address}/api/`,
    headers: { Authorization: token },
  });
};
