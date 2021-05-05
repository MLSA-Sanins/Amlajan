import React from 'react';
import Routes from './Routes';
import { connect } from "react-redux";
import { fetchUser } from "../redux/actions/userAction";
import * as GoogleSignIn from 'expo-google-sign-in';

class Providers extends React.Component {

  initAsync = async () => {
    try {
      await GoogleSignIn.initAsync({});
      this._syncUserWithStateAsync();
    } catch(e) {
      console.log("Problems",e);
    }
  };

  _syncUserWithStateAsync = async () => {
    try {
      const user = await GoogleSignIn.signInSilentlyAsync();
      this.props.fetchUser(user);
    } catch (e) {
      console.log("Problems",e);
    }
  };
  
  componentDidMount() {
    this.initAsync();
  }

  render() {
    return <Routes/>
  }
}

export default connect(null, {
  fetchUser:fetchUser
})(Providers);
