import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SignUpScreen() {
  return (
    <View style={styles.Page}>
      <Text>SIGN UP SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  }
})
