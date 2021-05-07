import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import FormInput from "../../components/FormInput";
import { Feather } from "@expo/vector-icons";
import { primary } from "../../theme/theme";

const UserDetailsScreen=({route})=> {
  
  return (
    <View>
      <Text style={styles.title}>
        ENTER {route.params.title.toUpperCase()} DETAILS
      </Text>
      <FormInput phd="Name" name="user"/>
      <FormInput phd="Email" name="mail"/>
      <FormInput phd="Phone Number" name="smartphone"/>
      <View style={styles.formContainer}>
        <Feather style={styles.icon} name="map"/>
        <TextInput style={styles.textInput} placeholder="Address"/>
        <TouchableOpacity style={styles.location}>
          <Feather style={styles.mapPin} name="map-pin"/>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
  title:{
    textAlign:"center",
    marginTop:30,
    marginBottom:15,
    fontSize:25
  },
  formContainer: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 30,
    borderColor: "gray",
    borderRadius: 5,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  textInput: {
    flex: 1,
    fontSize:18
  },
  icon: {
    alignSelf: "center",
    fontSize: 20,
    margin: 10,
    color: primary.main,
  },
  location:{
    justifyContent:"center",
    backgroundColor:primary.main
  },
  mapPin:{
    fontSize: 20,
    margin: 10,
    color:"#fff"
  }
})
