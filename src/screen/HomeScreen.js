import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TaskItem } from "../component/TaskItem";
import { AddTaskItem } from "../component/AddTaskItem";
import FeatherIcon from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("screen");

export function HomeScreen(){
  const [task, setTask] = React.useState([
    {
      id: 1,
      name: 'Minyak Goreng',
      check: false
    },
    {
      id: 2,
      name: 'Sabun Cuci',
      check: false
    }
  ])

  function updateItem(id, type, value){
    let _tmpItem = [...task].map((item, index) => {
      if(item.id === id){
        item[type] = value;
      }
      return item;
    })
    setTask(_tmpItem);
  }

  function addItem(){
    let _tmpNewItem = {
      id: task.length+1,
      name: '',
      check: false
    }
    let _task = [...task].concat(_tmpNewItem);
    setTask(_task);
  }

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList 
        data={task}
        renderItem={({item}) => {
          return(
            <TaskItem 
              item={item}
              updateItem={(type, val) => updateItem(item.id, type, val)}
            />
          )
        }}
        ListFooterComponent={() => {
          return(
            <AddTaskItem 
              onPress={addItem}
            />
          )
        }}
      />
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