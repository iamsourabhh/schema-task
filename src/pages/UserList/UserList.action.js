import {
  GET_USERS,
  CHANGE_NAME,
  CHANGE_SURNAME,
  GET_TOKEN,
  UPDATE_USER
} from "../../redux/actions/actionTypes";

export const getUsers = () => {
  return {
    type: GET_USERS
  };
};
export const onNameChange = (name, id) => {
  return {
    type: CHANGE_NAME,
    payload: { name, id }
  };
};
export const onSurnameChange = (name, id) => {
  return {
    type: CHANGE_SURNAME,
    payload: { name, id }
  };
};
export const getToken = (name, id) => {
  return {
    type: GET_TOKEN
  };
};
export const updateUser = (Id, Name, Surname) => {
  return {
    type: UPDATE_USER,
    payload: { Id, Name, Surname }
  };
};
