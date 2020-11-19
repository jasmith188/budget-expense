import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
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
        <Text style={styles.titleText}>React Native Todo App</Text>
      </View>
      <ScrollView>
      {todos.map((todo) => (
        <Todo style={styles.todoText} title={todo} />
      ))}
      </ScrollView>
      
      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button style={styles.button} title="Add TODO" onPress={addTodo} />
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
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  },
  todoText: {
    margin: 20
  },
  button: {
    width: '50%'
  }
});

export default App;
