import {
  FETCHING_USER,
  USER_FETCHED,
  USER_LOGGED_IN,
  SIGNING_OUT_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from "../constants";
import { getErrors, clearErrors } from "../actions/errorActions";
import * as GoogleSignIn from 'expo-google-sign-in';


//google auth
const _syncUserWithStateAsync = async (dispatch) => {
  const user = await GoogleSignIn.signInSilentlyAsync();
  dispatch({ type: USER_FETCHED, payload: user });
};

export const fetchUser = (user) => async (dispatch, getState) => {
  //fetching user
  dispatch({ type: FETCHING_USER })

  try {
    dispatch({ type: USER_FETCHED, payload: user });
  } catch (error) {
    dispatch(getErrors(error));
    dispatch({type:AUTH_ERROR})
  }
}

export const signinUserGoogle = () => async (dispatch, getState) => {
  //fetching user
  dispatch({ type: FETCHING_USER })

  try {
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();
    if (type === 'success') {
      await _syncUserWithStateAsync(dispatch);
    }
  } catch ({ message }) {
    alert('login: Error:' + message);
  };
};

export const signOutUserGoogle = () => async (dispatch, getState) => {
  //fetching user
  dispatch({ type: SIGNING_OUT_USER })

  try {
    await GoogleSignIn.signOutAsync();
    dispatch({type:SIGN_OUT_USER})
  } catch ({ message }) {
    alert('login: Error:' + message);
  };
};


//facebook oauth


