import { GET_ERROR, CLEAR_ERROR } from "../constants";

const initialState = {
  error:null
}

export default (state = { initialState }, action) => {
  switch (action.type){
    case GET_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}