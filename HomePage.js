import React, { useState } from 'react';
import {
    SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
} from 'react-native';
import Todo from './Todo';
import Image from './assets/yellow-notebook.jpg';

const styles = StyleSheet.create({
  titleText: {
    paddingTop: 40,
    fontSize: 50,
    margin: 20,
    textAlign: 'center',
    // fontFamily: 'lucida grande',
  },
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
  },

  todoText: {
    textAlign: 'center',
    // fontFamily: 'lucida grande',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const HomePage = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  };

  const image = {
    uri:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-notebook-paper-background-design-template-d7dfa26f8c8c759652e2521f0ecd24eb_screen.jpg?ts=1567891546',
  };
  return (
    
      <SafeAreaView>
        {/* <ImageBackground source={image} style={styles.image}> */}
        <View>
          <Text style={styles.titleText}>Gr🍊cery List</Text>
        </View>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
        <TextInput
          style={styles.todoInput}
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Button
          style={styles.appButtonText}
          color="red"
          title="Add To List"
          onPress={addTodo}
        />
        <View>
          {todos.map((todo) => (
            <Todo style={styles.todoText} title={todo} />
          ))}
        </View>
        {/* </ImageBackground> */}
      </SafeAreaView>
    
  );
};

export default HomePage;
