import { _gNavData } from "../API/navigation_data";
import { Actiontypes } from "../Components/Actiontypes";
const initialState = {

};

export const GetNextPageID = (state=initialState,action)=>{
  switch(action.type){
    case Actiontypes.GET_NEXT_PAGE_ID:
        return {...state,pageId:action.payload};
        break;
        default: return state;
  }
}