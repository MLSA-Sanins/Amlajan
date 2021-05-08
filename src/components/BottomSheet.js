import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';


const BottomSheet = (props) => {

  return (
      <Animated.View
        style={[styles.bottomView,props.styled]}
      >
          <Text>
          
          </Text>
      </Animated.View>
  )
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor:"#000"
  }
})
