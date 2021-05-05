import { GET_ERROR, CLEAR_ERRORS } from "../constants";

//get errors
export const getErrors = (error) => () => {
  return {
    type: GET_ERROR,
    payload: error
  };
}

//clear errors
export const clearErrors = () => () => {
  return {
    type: CLEAR_ERRORS
  };
}