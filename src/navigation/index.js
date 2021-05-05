import React from 'react';
import Routes from './Routes';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { initAsync } from "../utils/googleSignIn";
import {initFbAsync} from "../utils/faceBookSignIn";
import { fetchUser } from "../redux/actions/userAction";
import * as GoogleSignIn from 'expo-google-sign-in';
import { FETCHING_USER } from '../redux/constants';

class Providers extends React.Component {

  // initAsync = async () => {
  //   try {
  //     await GoogleSignIn.initAsync({});
  //     this._syncUserWithStateAsync();
  //   } catch(e) {
  //     console.log("Problems",e);
  //   }
  // };

  // _syncUserWithStateAsync = async () => {
  //   try {
  //     const user = await GoogleSignIn.signInSilentlyAsync();
  //     this.props.fetchUser(user);
  //   } catch (e) {
  //     console.log("Problems",e);
  //   }
  // };
  
  componentDidMount() {
    this.props.dispatch({type:FETCHING_USER})
    initAsync(this.props.fetchUser, this.props.dispatch);
    initFbAsync(this.props.fetchUser, this.props.dispatch)
  }

  render() {
    return <Routes/>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ fetchUser }, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Providers);
