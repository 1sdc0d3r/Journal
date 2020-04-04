import axios from "axios";
import { getToken } from "../utils/authService";

export const axiosWithAuth = () => {
  const token = getToken();
  return axios.create({
    baseURL: "https://micro-journal.herokuapp.com/api/",
    headers: { Authorization: token }
  });
};
