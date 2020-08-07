import { combineReducers } from "redux";
import courses from "./reducerCourse";
import authors from "./reducerAuthor";
import apiCallStatus from "./reducerApiStatus";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallStatus,
});

export default rootReducer;
