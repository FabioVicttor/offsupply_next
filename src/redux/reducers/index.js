import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import ModalLogin from "./ModalLogin";

export default combineReducers({ ModalLogin, todos, visibilityFilter });
