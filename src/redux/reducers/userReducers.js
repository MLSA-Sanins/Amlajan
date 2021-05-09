import { FETCHING_USER,USER_FETCHED,SIGN_OUT_USER,SIGNING_OUT_USER,AUTH_ERROR, LOADING_LOCATION, LOCATION_FETCHED, LOCATION_ERROR,FETCHING_ADDRESS,ADDRESS_FETCHED } from '../constants/index';
const initialObject = {
  currentUser: null,
  isLoading: null,
  loadingLocation:null,
  location: null,
  address:null,
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
      return { ...state, isLoading: false, currentUser: null }
    case FETCHING_ADDRESS:
    case LOADING_LOCATION:
      return { ...state, loadingLocation: true }
    case LOCATION_FETCHED:
      return { ...state, loadingLocation: false, location: action.payload }
    case ADDRESS_FETCHED:
      return{...state,loadingLocation: false,address:action.payload}
    case LOCATION_ERROR:
      return {...state,loadingLocation:false,location:null}
    default: {
      return state;
    }
  }
}