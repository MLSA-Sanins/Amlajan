import * as GoogleSignIn from 'expo-google-sign-in';
import { AUTH_ERROR } from '../redux/constants';
export const initAsync = async (fetchUser,dispatch) => {
  try {
    await GoogleSignIn.initAsync({});
    _syncUserWithStateAsync(fetchUser);
  } catch(e) {
    console.log("Problems", e);
    dispatch({ type: AUTH_ERROR });
  }
};

const _syncUserWithStateAsync = async (fetchUser) => {
  try {
    const user = await GoogleSignIn.signInSilentlyAsync();
    fetchUser(user);
  } catch (e) {
    console.log("Problems",e);
  }
};