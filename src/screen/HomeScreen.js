import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TaskItem } from "../component/TaskItem";
import { AddTaskItem } from "../component/AddTaskItem";


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

  function removeItem(id){
    let _newTask = [...task].filter(ar => ar.id !== id);
    setTask(_newTask);
  }

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList 
        data={task}
        renderItem={({item}) => {
          if(item.check === false){
            return(
              <TaskItem 
                item={item}
                updateItem={(type, val) => updateItem(item.id, type, val)}
                removeItem={() => removeItem(item.id)}
              />
            )
          } else {
            return null
          }
        }}
        ListFooterComponent={() => {
          return(
            <AddTaskItem 
              onPress={addItem}
            />
          )
        }}
      />
      <FlatList 
        data={task}
        renderItem={({item}) => {
          if(item.check === true){
            return(
              <TaskItem 
                item={item}
                updateItem={(type, val) => updateItem(item.id, type, val)}
                removeItem={() => removeItem(item.id)}
              />
            )
          } else {
            return null
          }
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