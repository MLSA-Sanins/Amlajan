import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../screens/LoadingScreen";
import AuthStack from './AuthStack';
import { connect } from "react-redux";
import AppStack from "./AppStack";
import { isLoading } from 'expo-font';

const Stack = createStackNavigator();

const Routes = ({user}) => {
  const returnStack = () => {
    if (user.isLoading) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      );
    } else if (user.isLoading === false && user.currentUser) {
      return <AppStack/>
    } else {
      return <AuthStack/>
    }
  }
  console.log(user);
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