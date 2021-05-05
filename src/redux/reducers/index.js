import { combineReducers } from "redux";
import userReducer from '../reducers/userReducers';
import errorReducer from "../reducers/errorReducers";

export default combineReducers({
  user: userReducer,
  error:errorReducer
});
