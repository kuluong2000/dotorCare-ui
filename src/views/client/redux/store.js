import { combineReducers } from "redux";
import { modal } from "./reducer/modal";

export default combineReducers({
  modal: modal,
});
