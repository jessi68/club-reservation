import {combineReducers} from "redux";
import {storeReducer} from "./stores/reducer";

const rootReducer = combineReducers({
    storeReducer
})

export default rootReducer;