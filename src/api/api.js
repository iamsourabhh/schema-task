import axios from "axios";

const USER_ID = "C13D0491C8C249A498131B5AC03D4882";
const USER_PASSWORD = "BC373B8";
export const getRandomTextApi = () => {
  return axios.get("http://www.randomtext.me/api/");
};

export const getUsersApi = () => {
  return axios.get("http://challenge.schema.rocks/api/Employee", {
    params: {
      userId: USER_ID
    }
  });
};
export const updateUserApi = (Id, Name, Surname) => {
  return axios.post(
    "http://challenge.schema.rocks/api/Employee",
    { Id, Name, Surname },
    {
      params: {
        userId: USER_ID
      }
    }
  );
};

export const getAuthToken = () => {
  return axios.post(
    "http://challenge.schema.rocks/token",
    {
      grant_type: "password",
      username: USER_ID,
      password: USER_PASSWORD
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  );
};

export const updateUser = () => {};
