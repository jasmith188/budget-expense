import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import Todo from './Todo';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}> 🍎🍌 Gr🍊cery List 🥑🥕   </Text>
      </View>
      <View>
      {todos.map((todo) => (
        
        <Todo style={styles.todoText} title={todo} />
      ))}
      </View>
      
      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button style={styles.appButtonText} title="Add To List" onPress={addTodo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  titleText: {
    paddingTop: 80,
    fontSize: 50,
    margin: 20,
    textAlign: 'center'
  },
  todoText: {
    textAlign: 'center'
  },
  appButtonText: {
    // textTransform: 'none'
    fontWeight: "bold"
  }
    
});

export default App;
