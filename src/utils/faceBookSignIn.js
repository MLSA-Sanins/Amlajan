import * as Facebook from 'expo-facebook';
import { getErrors } from '../redux/actions/errorActions';
import { AUTH_ERROR } from '../redux/constants';

export const initFbAsync = async (fetchUser,dispatch) => {
  try {
    await Facebook.initializeAsync({
      appId: '3843660325751667',
    });
    const user = await Facebook.getAuthenticationCredentialAsync(); 
    if (!user) {
      dispatch({ type: AUTH_ERROR });
    } else {
      fetchUser(user);
    }
  } catch (error) {
    console.log(error);
    alert(`Facebook Login Error: ${error}`);
    dispatch(getErrors(error));
    dispatch({ type: AUTH_ERROR });
  }
}