import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(()=>{
//   console.log('State Updated... ',store.getState());
// })
// store.subscribe('Store Updated')
export default store;
