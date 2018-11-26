import { combineReducers } from "redux";
import usersReducer from "../pages/UserList/UserList.reducer";
const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
