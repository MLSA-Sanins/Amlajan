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
      const data = await fetch(`https://graph.facebook.com/v10.0/me?fields=id%2Cname%2Cpicture.height(400).width(400)&access_token=${user.token}`);
      const dataJson = await data.json();
      fetchUser(dataJson);
    }
  } catch (error) {
    alert(`Facebook Login Error: ${error}`);
    dispatch(getErrors(error));
  }
}