import { createStore } from "redux";
import mainReducer from "./rootReducers/mainReducer";

const store= createStore(mainReducer)


export default  store