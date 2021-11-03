import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const { width, height } = Dimensions.get("screen");

export function HomeScreen(){
  const [item, setItem] = React.useState({
    name: 'Minyak Goreng',
    check: false
  })
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.itemContainer}>
        <CheckBox 
          value={item.check}
          tintColors={{
            true: '#fc7f03',
            false: '#fc7f03'
          }}
          onValueChange={(newValue) => setItem({...item, check: newValue})}
        />
        <TextInput 
          style={styles.itemText}
          value={item.name}
          onChangeText={(val) => setItem({...item, name: val})}
        />
      </View>
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
  },
  itemContainer: {
    width: width*0.8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    color: 'black',
    marginLeft: 5,
  }
})