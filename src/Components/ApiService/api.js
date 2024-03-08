import axios from "axios";

const LOGIN_LINK_URL = "http://127.0.0.1:8080/api/authentication/ValidateUser";
const SAVE_STUDENT_URL = "http://127.0.0.1:8080/api/admin/registerStudent";

const generateHeaders = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const ValidateUser = (userData) => {
  return axios.post(LOGIN_LINK_URL, userData);
};

export const SaveStudent = (stdData, token) => {
  const headers = generateHeaders(token);
  return axios.post(SAVE_STUDENT_URL, stdData, headers);
};
