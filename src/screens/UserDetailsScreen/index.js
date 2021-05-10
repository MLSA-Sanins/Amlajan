import React,{useState,useRef,useEffect} from 'react';
import {
  StyleSheet,
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  InteractionManager,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ActivityIndicator 
} from 'react-native';
import FormInput from "../../components/FormInput";
import { Feather } from "@expo/vector-icons";
import { primary,secondary } from "../../theme/theme";
import { connect } from "react-redux";
import { setAddress } from "../../utils/setAddress";
import BottomSheetMap from "../../components/BottomSheetMap";
import BottomSheetHeader from "../../components/BottomSheetHeader";
import { height, width } from "../../utils/dimensions";
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';


const UserDetailsScreen = ({ route, user }) => {

  const [screenLoading, setScreenLoading] = useState(true);
  const [userName, setUserName] = useState(`${user.currentUser.name}`);
  const [address, changeAddress] = useState(`${setAddress(user.address)}`);

  

  useEffect(()=>{
    InteractionManager.runAfterInteractions(() => {
      // 2: Component is done animating 
      // 3: Start fetching data that is needed to render UI
      setScreenLoading(false) //Set screenloading prop to false
    });
  },[])

  const bs = useRef(null);
  //const fall = new Animated.value(1);

  const openBottomSheet = () => {
    bs.current.snapTo(0);
  }

  const closeBottomSheet = () => {
    bs.current.snapTo(1);
  }

  const renderHeader = () =>(<BottomSheetHeader/>) 
    

  const renderContent = () => (<BottomSheetMap close={closeBottomSheet} />);

  if (screenLoading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <KeyboardAvoidingView style={{flex:1}} behavior="height">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
          <View style={styles.formContainer}>
            <Feather style={styles.icon} name="user"/>
              <TextInput
                value={userName}
                onChangeText={setUserName}
                style={styles.textInput}
                placeholder="Username"
              />
          </View>
          {route.params.title.toUpperCase() === "PROVIDER" && <FormInput phd="Email" name="mail" />}
          {route.params.title.toUpperCase() === "PROVIDER" &&<FormInput phd="Phone Number" name="smartphone"/>}
          <View style={styles.formContainer}>
            <Feather style={styles.icon} name="map"/>
            <TextInput value={address} onChangeText={changeAddress} style={styles.textInput} placeholder="Address"/>
            <TouchableOpacity
              style={styles.location}
              onPress={() =>  openBottomSheet()}
            >
              <Feather style={styles.mapPin} name="map-pin"/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.buttonText}>{route.params.title==="Provider"?"REGISTER":"SEARCH PROVIDERS" }</Text>
          </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
          <BottomSheet
            ref={bs}
            snapPoints={[height / 1.5, 0]}
            initialSnap={1}
            renderContent={renderContent}
            renderHeader={renderHeader}
            // callbackNode={fall}
            enabledContentGestureInteraction={false}
            enabledHeaderGestureInteraction={true}
          />
      </KeyboardAvoidingView>
    </>
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
