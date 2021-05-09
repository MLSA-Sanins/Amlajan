import React,{ useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import FormInput from "../../components/FormInput";
import { Feather } from "@expo/vector-icons";
import { primary,secondary } from "../../theme/theme";
import { connect } from "react-redux";
import { height, width } from "../../utils/dimensions";
import Animated from 'react-native-reanimated';
import BottomSheetMap from "../../components/BottomSheetMap";
import BottomSheetHeader from "../../components/BottomSheetHeader";
import BottomSheet from 'reanimated-bottom-sheet';


const UserDetailsScreen = ({ route, user }) => {

  const closeBottomSheet = () => {
    return sheetRef.current.snapTo(1)
  }

  const renderContent = () => (
    <BottomSheetMap close={closeBottomSheet}/>
  );

  const renderHeader = () => (<BottomSheetHeader/>)
 
  const sheetRef = React.useRef(null);

  return (
    <React.Fragment>
    <View>
      <Text style={styles.title}>
        ENTER {route.params.title.toUpperCase()} DETAILS
      </Text>
      <View style={styles.picContainer}>
          <Image
          progressiveRenderingEnabled
          style={styles.img}
          source={{ uri: user.currentUser.picture.data.url }}
          />
      </View>
      <FormInput value={user.currentUser.name} phd="Name" name="user"/>
      {route.params.title.toUpperCase() === "PROVIDER" && <FormInput phd="Email" name="mail" />}
      {route.params.title.toUpperCase() === "PROVIDER" &&<FormInput phd="Phone Number" name="smartphone"/>}
      <View style={styles.formContainer}>
        <Feather style={styles.icon} name="map"/>
        <TextInput style={styles.textInput} placeholder="Address"/>
        <TouchableOpacity
          style={styles.location}
          onPress={() => sheetRef.current.snapTo(0)}
        >
          <Feather style={styles.mapPin} name="map-pin"/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>{route.params.title==="Provider"?"REGISTER":"SEARCH PROVIDERS" }</Text>
      </TouchableOpacity>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height/1.5, 0]}
        
        renderContent={renderContent}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledContentGestureInteraction={false}
        enabledHeaderGestureInteraction
      />
      </React.Fragment>
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
    borderBottomRightRadius:4,
  },
  mapPin:{
    fontSize: 20,
    margin: 10,
    color: "#fff",  
  },
  picContainer: {
    marginTop: 30,
    marginBottom:10,
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor:"gray",
    alignSelf: "center",
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
