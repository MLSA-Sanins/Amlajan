import { FETCHING_USER,USER_FETCHED,SIGN_OUT_USER,SIGNING_OUT_USER,AUTH_ERROR } from '../constants/index';
const initialObject = {
  currentUser: null,
  isLoading:null,
};

export default (state=initialObject,action) => {
  switch (action.type) {
    case FETCHING_USER: {
      return {...state,isLoading:true}
    }
    case USER_FETCHED: {
      return {...state,isLoading:false,currentUser:action.payload}
    }
    case SIGNING_OUT_USER:
      return {...state,isLoading:true}
    case SIGN_OUT_USER:
      return { ...state, currentUser: null, isLoading: false }
    case AUTH_ERROR:
      return {...state,isLoading:false,currentUser:null}
    default: {
      return state;
    }
  }
}