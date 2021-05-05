import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { width, height } from "../utils/dimensions";
import {  FontAwesome } from '@expo/vector-icons';

export default FacebookButton = ({press}) => {
  return (
    <TouchableOpacity onPress={() => press()} style={styles.facebook}>
      <FontAwesome style={styles.facebookIcon} name="facebook" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  facebook: {
    display:"flex",
    width: width / 2.5,
    height:height/10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor:"#e5e5e5"
  },
  facebookIcon: {
    fontSize: 30,
    color:"#3b5998"
  },
})