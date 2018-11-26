import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CHANGE_NAME,
  CHANGE_SURNAME
} from "../../redux/actions/actionTypes";

const INITIAL_STATE = {
  userList: [],
  loading: false,
  isError: false,
  errorMessage: ""
};

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
        isError: false
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        isError: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        userList: payload.userList
      };
    case CHANGE_NAME:
      return {
        userList: {
          ...state.userList,
          [payload.id]: {
            ...state.userList[payload.id],
            Name: payload.name
          }
        }
      };
    case CHANGE_SURNAME:
      return {
        userList: {
          ...state.userList,
          [payload.id]: {
            ...state.userList[payload.id],
            Surname: payload.name
          }
        }
      };
    default:
      return state;
  }
};

export default usersReducer;
