import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {width,height} from "../../utils/dimensions";
import {primary,secondary} from "../..//theme/theme";

const RoleScreen=({navigation})=> {
  return (
    <View style={styles.Page}>
      <View style={styles.imgContainer}>
        <Image 
          style={styles.img} 
          source={require("../../../assets/png/help.png")}
        />
      </View>
      <Text style={styles.title}>
        CHOOSE
      </Text>
      <Text style={styles.subTitle}>
        YOUR ROLE
      </Text>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("UserDetails",{title:"Patient"})} 
      style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          PATIENT
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("UserDetails",{title:"Provider"})}
      style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          PROVIDER
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default RoleScreen;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
  },
  imgContainer:{
    paddingTop:80,
    marginHorizontal:30
  },
  img:{
    width:width,
    height:height*0.5,
    // marginHorizontal:10,
    alignSelf: "center",
  },
  title: {
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
    textAlign:"center"
  },
  subTitle:{
    fontSize: 24,
    textAlign:"center",
    color:primary.main
  },
  button:{
    marginHorizontal: 20,
    backgroundColor: secondary.button,
    marginTop: 20,
    borderRadius:10,
  },
  buttonTitle: {
    color:"white",
    padding: 15,
    textAlign: "center",
    fontSize:15
  },
})
