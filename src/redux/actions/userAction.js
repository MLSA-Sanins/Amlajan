import {
  FETCHING_USER,
  USER_FETCHED,
  USER_LOGGED_IN,
  SIGNING_OUT_USER,
  SIGN_OUT_USER,
  AUTH_ERROR,
  LOADING_LOCATION,
  LOCATION_FETCHED,
  LOCATION_ERROR,
  FETCHING_ADDRESS,
  ADDRESS_FETCHED
} from "../constants";
import { getErrors, clearErrors } from "../actions/errorActions";
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';
import * as Location from 'expo-location';


//google auth
const _syncUserWithStateAsync = async (dispatch) => {
  const user = await GoogleSignIn.signInSilentlyAsync();
  const pic = await GoogleSignIn.getPhotoAsync(400);
  dispatch({ type: USER_FETCHED, payload: {...user,picture:{data:{url:pic}}} });
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
  if (getState().user.currentUser) {
    return
  }
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

export const signinUserFb = () => async (dispatch,getState) => {
  //fetching user
  if (getState().user.currentUser) {
    return
  }
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


//fetch user location
export const fetchLocation = () =>async(dispatch,getState)=> {
  dispatch({ type: LOADING_LOCATION });
  
  //if location exists return
  if (getState().user.location) {
    return;
  }
  try {
    console.log("running location")
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      dispatch({ type: LOCATION_ERROR, payload: "Location Access was Denied" });
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    dispatch({ type: LOCATION_FETCHED, payload: location.coords });
    dispatch(convertLocation(location.coords))
    console.log("location fetched");
    dispatch(clearErrors());
  } catch (e) {
    dispatch(getErrors(e));
  }
}

//convert location to address
export const convertLocation = (location) => async (dispatch) => {
  try {
    console.log("Fetching Address")
    dispatch({ type: FETCHING_ADDRESS })
    await Location.setGoogleApiKey("AIzaSyDP1phzFR8J7_1rsp9_iVn1ztr4WtoWL1A");
    let address = await Location.reverseGeocodeAsync({
      latitude:location.latitude,
      longitude:location.longitude
    }, {
      options: {
        useGoogleMaps: true, 
      }
    });
    console.log(address)
    dispatch({ type: ADDRESS_FETCHED, payload: address });
    console.log("Address Fetched")
  } catch (e) {
    dispatch(getErrors(e));
  }
}

export const setLocation = (x) => async (dispatch) => {
  try {
    console.log("Setting location");
    
    dispatch({ type: LOCATION_FETCHED, payload: x });
    await dispatch(convertLocation(x));
    console.log("location set");
    dispatch(clearErrors());
  } catch (e) {
    dispatch(getErrors(e));
  }
}