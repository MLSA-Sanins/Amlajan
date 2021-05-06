import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "../screens/LoadingScreen";
import AuthStack from './AuthStack';
import { connect } from "react-redux";
import AppStack from "./AppStack";


const Routes = ({user}) => {
  const returnStack = () => {
    if (user.isLoading) {
      return (
        <LoadingScreen/>
      );
    } else if (user.isLoading === false && user.currentUser) {
      return <AppStack/>
    } else {
      return <AuthStack/>
    }
  }
  return (
    <NavigationContainer>
      {returnStack()}
    </NavigationContainer>
  )
};

const mapStateToProps = (state) => {
  return {user:state.user}
}

export default connect(mapStateToProps,{})(Routes);