import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import BottomSheet from "../../components/BottomSheet";
import FormInput from "../../components/FormInput";
import { Feather } from "@expo/vector-icons";
import { primary,secondary } from "../../theme/theme";
import { connect } from "react-redux";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import { PanGestureHandler } from "react-native-gesture-handler";
import { width, height } from "../../utils/dimensions";

const SPRING_CONFIG = {
  damping:80,
  overshootClamping:true,
  restDisplacementThreshold:0.1,
  restSpeedThreshold:0.1,
  stiffness:500,
}


const UserDetailsScreen = ({ route, user }) => {
  
  const top = useSharedValue({
    height
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > height / 1.2 + 200) {
        top.value = height;
      } else {
        top.value = height / 1.2;
      }
    }
  });

  const styled = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG)
    }
  });
  
  const showBottomScreen = () => {
    top.value = withSpring(height / 1.2,SPRING_CONFIG);
  }


  return (
    <View>
      <Text style={styles.title}>
        ENTER {route.params.title.toUpperCase()} DETAILS
      </Text>
      <View style={styles.picContainer}>
        <Image
          style={styles.img}
          source={{ uri: user.currentUser.picture.data.url }}
          />
      </View>
      <FormInput phd="Name" name="user"/>
      {route.params.title.toUpperCase() === "PROVIDER" && <FormInput phd="Email" name="mail" />}
      {route.params.title.toUpperCase() === "PROVIDER" &&<FormInput phd="Phone Number" name="smartphone"/>}
      <View style={styles.formContainer}>
        <Feather style={styles.icon} name="map"/>
        <TextInput style={styles.textInput} placeholder="Address" onPress={()=>showBottomScreen()}/>
        <TouchableOpacity style={styles.location}>
          <Feather style={styles.mapPin} name="map-pin"/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>{route.params.title==="Provider"?"REGISTER":"SEARCH PROVIDERS" }</Text>
      </TouchableOpacity>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <BottomSheet styled={styled}/>
      </PanGestureHandler>
    </View>
  )
};

const mapStateToProps = (state) => {
  return { user:state.user };
}

export default connect(mapStateToProps, {
  
})(UserDetailsScreen);

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
    backgroundColor: primary.main,
    borderTopRightRadius: 4,
    borderBottomRightRadius:4
  },
  mapPin:{
    fontSize: 20,
    margin: 10,
    color:"#fff"
  },
  picContainer: {
    marginTop: 30,
    marginBottom:10,
    width: 120,
    height: 120,
    borderRadius: 100,
    alignSelf: "center",
    elevation: 15,
    backgroundColor:"gray"
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  registerButton: {
    backgroundColor: secondary.button,
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 5,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize:16
  }
})
