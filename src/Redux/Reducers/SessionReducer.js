import { CREATEPOST_MODEL } from "../Actions/Types";

const intialState = {
    openCreateModal : false,
    bannerData : [],
  };
  
  
  
  export default (state = intialState, action) => {
    // console.log('actionData',action.payload)
    switch (action.type) {
      case CREATEPOST_MODEL:{
        return{
          ...state,
          openCreateModal: action.payload
        }
      }
        default: {
        return state;
      }
    }
  };
  