import { Actiontypes } from "../Components/Actiontypes"
export const getNextPageId =(currentpageObject)=>{
   return {
    type:Actiontypes.GET_NEXT_PAGE_ID,
    payload:currentpageObject
   }
}