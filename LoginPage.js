import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
});

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>I am the Login Page</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder="Enter your username "
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Enter your password "
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LoginPage;
