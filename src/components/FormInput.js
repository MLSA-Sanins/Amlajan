import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { height, width } from "../utils/dimensions";
import { Feather } from "@expo/vector-icons";
import { primary } from "../theme/theme";

export default function FormInput({phd,name}) {
  return (
    <View style={styles.formContainer}>
      <Feather style={styles.icon} name={name}/>
      <TextInput style={styles.textInput} placeholder={phd}/>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})
