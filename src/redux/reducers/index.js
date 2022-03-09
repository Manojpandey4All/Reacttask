import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
// import {loginUser} from "./auth"
// import {reducer as toastrReducer} from 'react-redux-toastr'
const reducers = combineReducers({
  allProducts: productsReducer,
});
export default reducers;
