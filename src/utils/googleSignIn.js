import * as GoogleSignIn from 'expo-google-sign-in';
import { AUTH_ERROR } from '../redux/constants';
import { clearErrors } from "../redux/actions/errorActions";
export const initAsync = async (fetchUser,dispatch) => {
  try {
    await GoogleSignIn.initAsync({});
    _syncUserWithStateAsync(fetchUser);
  } catch(e) {
    console.log("Problems", e);
    dispatch(clearErrors(e));
  }
};

const _syncUserWithStateAsync = async (fetchUser) => {
  try {
    const user = await GoogleSignIn.signInSilentlyAsync();
    const pic = await GoogleSignIn.getPhotoAsync(400);
    if (!user) {
      dispatch({ type: AUTH_ERROR });
    } else {
      fetchUser({...user,picture:{data:{url:pic}}});
    } 
  } catch (e) {
    console.log("Problems", e);
    dispatch(clearErrors(e));
  }
};