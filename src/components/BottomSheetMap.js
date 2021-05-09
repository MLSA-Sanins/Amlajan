import React,{useState} from 'react';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import { StyleSheet, Text, TouchableOpacity,TextInput,KeyboardAvoidingView, View } from 'react-native';
import { width, height } from "../utils/dimensions";
import { primary, secondary } from "../theme/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { fetchLocation,convertLocation,setLocation  } from "../redux/actions/userAction";
import mapNormal from "../utils/mapNormal.json"
import mapDarkStyle from "../utils/mapDarkStyle.json";
import mapAubergine from "../utils/mapAubergine.json";



const BottomSheet = ({ location, isLoading,setLocation, fetchLocation,close }) => {
  
  const [themes, setThemes] = useState(mapNormal);
  const [x, setX] = useState(location);

  const setMarkerLocation = () => {
    setLocation(x);
    close();
  }

  const cycleTheme = () => {
    if (themes === mapNormal) {
      setThemes(mapDarkStyle);
    } else if (themes === mapDarkStyle) {
      setThemes(mapAubergine)
    } else if (themes === mapAubergine) {
      setThemes(mapNormal);
    }
  }
  
  const returnInitialValue = () => {
    if (location) {
      return {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      };
    }
    return {
      latitude: 28.704059,
      longitude: 77.10249,
      latitudeDelta: 1.0922,
      longitudeDelta: 1.0421
    }
  }

  return (
      <View  style={styles.bottomView}>
        <MapView
          style={styles.map}
          customMapStyle={themes}
          initialRegion={returnInitialValue()}
        >
          <Marker draggable
              coordinate={x}
              onDragEnd={(e) => setX(e.nativeEvent.coordinate )}
          />
        </MapView>
          <TouchableOpacity onPress={()=>cycleTheme()} style={styles.themeButton}>
            <MaterialIcons name="invert-colors" style={styles.locationIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>fetchLocation()} style={styles.locationButton}>
            <MaterialIcons name="my-location" style={styles.locationIcon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setMarkerLocation()} style={styles.button}>
            <Text style={styles.buttonText}>
              ADD CURRENT LOCATION
            </Text>
          </TouchableOpacity>
      </View>
  )
};

const mapStateToProps = (state) => {
  return {location:state.user.location,isLoading:state.user.loadingLocation}
}

export default connect(mapStateToProps, {
  fetchLocation: fetchLocation,
  setLocation:setLocation
})(BottomSheet);

const styles = StyleSheet.create({
  bottomView: {
    // backgroundColor: primary.light,
    // padding: 20,
    height: height / 2,
    flexDirection:"column",
    alignItems:"center"
  },
  map: {
    width: width,
    height: height, 
  },
  button: {
    backgroundColor: primary.light,
    marginHorizontal: 20,
    borderRadius: 5,
    height: 50,
    width:250,
    position: 'absolute',
    bottom:0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation:5
  },
  buttonText: {
    color: "#fff",
    fontSize:18
  },
  locationButton: {
    width: 50,
    height: 50,
    backgroundColor: secondary.backgroundGray,
    borderRadius: 25,
    elevation:5,
    position: 'absolute',
    bottom: height / 10,
    right: width / 15,
    justifyContent: "center",
    alignItems:"center"
  },
  locationIcon: {
    color: "#000",
    fontSize:25
  },
  themeButton: {
    width: 50,
    height: 50,
    backgroundColor: secondary.backgroundGray,
    borderRadius: 25,
    elevation:5,
    position: 'absolute',
    bottom: height / 5,
    right: width / 15,
    justifyContent: "center",
    alignItems:"center"
  },
  icon: {
    alignSelf: "center",
    fontSize: 20,
    margin: 10,
    color: primary.main,
  }
})
