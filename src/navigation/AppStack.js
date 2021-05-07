import React from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import RoleScreen from "../screens/RoleScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Role"
        component={RoleScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Role')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;