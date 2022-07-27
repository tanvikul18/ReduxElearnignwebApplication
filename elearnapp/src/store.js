
import { createStore } from "redux";
import { getAllReducers } from "./Components";
 const store=createStore(getAllReducers,{});
export default store;
