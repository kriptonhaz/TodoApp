import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function HomeScreen(){
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black'
  }
})