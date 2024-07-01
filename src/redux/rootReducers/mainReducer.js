import { combineReducers } from "redux";
import { cartReducers } from "../reducers/reducer";

const mainReducer = combineReducers({cartReducers})

export default mainReducer