import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import multipleReducer from "./multipleReducer";

export default combineReducers({
    counter: counterReducer,
    multiple: multipleReducer,
});