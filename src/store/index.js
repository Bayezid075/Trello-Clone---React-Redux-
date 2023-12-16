import { createStore, combineReducers } from "redux";
import { boardReducer } from "../reducers/board";

const rootReducer = combineReducers({
  boardReducer: boardReducer,
});

export const reduxstore = createStore(rootReducer);
