import React from "react";
import { StyleSheet, Image, Text, View,TouchableOpacity, Touchable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import { width, height } from "../../utils/dimensions";
import { primary, secondary } from '../../theme/theme';


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    // borderTopRightRadius: 80,
    // borderBottomLeftRadius: 80,
    height: height * 0.5,
    width: width * 0.9,
  },
  title: {
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  buttonContainer: {
    marginHorizontal: 10,
    backgroundColor: secondary.button,
    marginTop: 20,
    borderRadius:10,
  },
  buttonText: {
    color:"white",
    padding: 15,
    textAlign: "center",
    fontSize:15
  },
  lastSlideTitle: {
    textAlign:"center",
    fontSize: 32,
    marginTop: 60,
  },
  lastSlideText: {
    color: "#767676",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    textAlign:"center"
  }
});

const OnboardingScreen = ({navigation}) => {
  
  return (
      <Swiper
        buttonWrapperStyle={{
          backgroundColor: "transparent",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          left: 0,
          flex: 1,
          paddingHorizontal: 30,
          paddingVertical: 20,
          justifyContent: "flex-end",
          alignItems: "flex-end",
      }}
      loop={false}
      index={0}
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={{
          marginRight: width * 0.7,
          marginBottom: height * 0.02,
        }}
        activeDotColor={secondary.button}
        dotColor={secondary.backgroundGray}
        nextButton={
          <View
            style={{
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              marginBottom:10,
              justifyContent: "center",
              width: 60,
              backgroundColor: secondary.button,
            }}
          >
            <AntDesign name="arrowright" size={22} color="#FFF" />
          </View>
        }
        prevButton={
          <View
            style={{
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              marginBottom:10,
              backgroundColor: secondary.button,
              marginHorizontal: 20,
            }}
          >
            <AntDesign name="arrowleft" size={22} color="#FFF" />
          </View>
        }
      >
      
        <View style={styles.slide}>
          <Image source={require("../../../assets/png/search.png")} style={styles.img} />
          <Text style={styles.title}>SEARCH</Text>
          <Text style={styles.text}>
            In this hustle of COVID with oxygen availability being so less, we are providing a platform for people in dire need of oxygen to search oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../../assets/png/contact.png")} style={styles.img} />
          <Text style={styles.title}>CONTACT</Text>
          <Text style={styles.text}>
          In this hustle of COVID with oxygen availability being so less, we are providing a platform for people in dire need of oxygen to search oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>

        <View style={styles.slide}>
          <Image source={require("../../../assets/png/map.png")} style={styles.img} />
          <Text style={styles.title}>VISUALISE</Text>
          <Text style={styles.text}>
          In this hustle of COVID with oxygen availability being so less, we are providing a platform for people in dire need of oxygen to search oxygen providers near them.Search for verified oxygen suppliers.
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../../assets/png/welcome.png")} style={styles.img} />
          <Text style={styles.lastSlideTitle}>WELCOME</Text>
          <Text style={styles.lastSlideText}>
          Wishing you a lightning recovery.
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>
              SIGNIN
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
  );
  // }
};

export default OnboardingScreen;