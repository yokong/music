import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
const combineReducer = combineReducers({
  recommend: recommendReducer,
});

export default combineReducer;

// const combineReducer = combineReducers({
//   recommend: recommendReducer
// })