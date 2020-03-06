import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("journalToken");
  return axios.create({
    baseURL: "https://micro-journal.herokuapp.com/api/",
    headers: { Authorization: token }
  });
};
