import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ title }) => {
  return (
    <View>
      <Text style={styles.textArea}>{title} </Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  textArea: {
    margin: 20,
    fontSize: 40,
    textAlign: 'center',
    // fontFamily: 'lucida grande', 
  },
});
