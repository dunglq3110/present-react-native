import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // State to store input value and message
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleButtonPress = () => {
    setMessage(`Hello, ${inputValue}!`);
  };

  return (
    <View style={styles.container}>
      {/* Text Input field */}
      <TextInput
        style={styles.input}
        placeholder="Type your name..."
        value={inputValue}
        onChangeText={setInputValue} // Update state when input value changes
      />

      {/* Button to trigger the message */}
      <Button title="Greet Me" onPress={handleButtonPress} />

      {/* Display the input value in the text below */}
      <Text style={styles.greetingText}>{inputValue}</Text>

      {/* Display the message when the button is clicked */}
      {message ? <Text style={styles.messageText}>{message}</Text> : null}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%', // Ensure input is full-width
  },
  greetingText: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  messageText: {
    color: 'green',
    fontSize: 24,
    marginTop: 20,
  },
});
