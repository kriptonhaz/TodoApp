import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import FeatherIcon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("screen");

export function AddTaskItem({onPress}){
  return(
    <TouchableOpacity style={styles.addItemContainer} onPress={onPress}>
      <FeatherIcon 
        name="plus"
        color="black"
        size={20}
      />
      <Text style={styles.text}>List Item</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginLeft: 10,
    fontSize: 18
  },
  addItemContainer: {
    width: width*0.8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5
  }
})