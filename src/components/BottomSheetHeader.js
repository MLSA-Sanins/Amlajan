import React from 'react';
import { StyleSheet, View } from 'react-native';
import { primary } from "../theme/theme";

const BottomSheetHeader=()=> {
  return (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}/>
      </View>
    </View>
  )
}

export default React.memo(BottomSheetHeader);

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary.main,
    shadowColor: "#333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
  },
  panelHeader: {
    alignItems:"center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ffffff40",
    marginBottom:8
  }
})
