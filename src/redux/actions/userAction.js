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
import * as Facebook from 'expo-facebook';


//google auth
const _syncUserWithStateAsync = async (dispatch) => {
  const user = await GoogleSignIn.signInSilentlyAsync();
  dispatch({ type: USER_FETCHED, payload: user });
};

export const fetchUser = (user) => async (dispatch) => {
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
    const { type} = await GoogleSignIn.signInAsync();
    if (type === 'success') {
      await _syncUserWithStateAsync(dispatch);
    } else {
      dispatch({ type: AUTH_ERROR });
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

export const signinUserFb = () => async (dispatch) => {
  //fetching user
  dispatch({ type: FETCHING_USER })

  try {
    console.log("FB SIGNING")
    await Facebook.initializeAsync({
      appId: '3843660325751667',
    });
    const user = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    //console.log(user);
    if (user.type === 'success') {
      
      const height = 200;
      
      // Get the user's name using Facebook's Graph API
      // const response = await fetch(`https://graph.facebook.com/me?access_token=${user.token}`);
      const data = await fetch(`https://graph.facebook.com/v10.0/me?fields=id%2Cname%2Cpicture.height(200).width(200)&access_token=${user.token}`);
      const dataJson = await data.json();
      dispatch({ type: USER_FETCHED, payload: dataJson })
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      dispatch({type:"AUTH_ERROR"})
    }
  } catch (error) {
    dispatch(getErrors(error))
  }
}
