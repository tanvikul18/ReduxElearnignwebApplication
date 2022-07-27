import { combineReducers } from "redux";
import {GetNextPageID} from './Reducers'
export const getAllReducers = combineReducers({
  getNPId :GetNextPageID
})