import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_TOKEN,
  GET_TOKEN_LOADING,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  UPDATE_USER,
  UPDATE_USER_LOADING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
} from "../../redux/actions/actionTypes";
import { getUsersApi, getAuthToken, updateUserApi } from "../../api/api";

function* getUserGen() {
  try {
    yield put({ type: GET_USERS_LOADING });

    const response = yield call(getUsersApi);

    const userList = {};

    response.data.map(user => {
      userList[user.Id] = {
        ...user,
        name_bak: user.Name,
        surname_bak: user.Surname
      };
    });
    yield put({
      type: GET_USERS_SUCCESS,
      payload: { userList: userList }
    });
  } catch (e) {
    yield put({ type: GET_USERS_ERROR, payload: { message: e.message } });
  }
}
function* getTokenGen() {
  try {
    yield put({ type: GET_TOKEN_LOADING });

    const response = yield call(getAuthToken);

    yield put({
      type: GET_TOKEN_SUCCESS,
      payload: { response }
    });
  } catch (e) {
    yield put({ type: GET_TOKEN_ERROR, payload: { message: e.message } });
  }
}
function* updateUserGen(action) {
  try {
    yield put({ type: UPDATE_USER_LOADING });
    const { Id, Name, Surname } = action.payload;
    const response = yield call(updateUserApi, Id, Name, Surname);

    yield put({
      type: UPDATE_USER_SUCCESS,
      payload: { response }
    });
  } catch (e) {
    yield put({ type: UPDATE_USER_ERROR, payload: { message: e.message } });
  }
}

function* userSaga() {
  yield takeLatest(GET_USERS, getUserGen);
  yield takeLatest(GET_TOKEN, getTokenGen);
  yield takeLatest(UPDATE_USER, updateUserGen);
}
export default userSaga;
