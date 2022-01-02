// reducer
import { combineReducers } from "redux";
import usersReducer from "./usersSlice";

// 수많은 리듀서들을 여기에 하나로! 
export default combineReducers({
    usersReducer
});