import { CREATEPOST_MODEL } from "./Types"



export const openModalAction = (data) =>{
  return{
    type: CREATEPOST_MODEL,
    payload: data
  }
}