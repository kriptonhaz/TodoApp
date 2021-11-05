import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FeatherIcon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("screen");

export function TaskItem({updateItem, item}){

  function clearText(){
    updateItem('name', '');
  }

  return(
    <View style={styles.itemContainer}>
      <CheckBox 
        value={item?.check}
        tintColors={{
          true: '#fc7f03',
          false: '#fc7f03'
        }}
        onValueChange={(newValue) => updateItem('check', newValue)}
      />
      <TextInput 
        style={styles.itemText}
        value={item?.name}
        onChangeText={(val) => updateItem('name', val)}
        multiline
      />
      {
        item?.name?.length > 0 &&
        <TouchableOpacity onPress={clearText}>
          <FeatherIcon 
            name="x"
            color="black"
            size={20}
          />
        </TouchableOpacity>
      }
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
    width: width*0.6
  }
})