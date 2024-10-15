import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type RootStackParamList = {
  Home: undefined;
  Detail: { text: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text.trim(), completed: false }]);
      setText("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <View style={styles.addButton}>
        <Button title="Add" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Text
                style={{
                  textDecorationLine: item.completed ? "line-through" : "none",
                  marginHorizontal: 10,
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Button
                title="Detail"
                onPress={() => navigation.navigate('Detail', { text: item.text })}
              />
              <Button title="Remove" onPress={() => removeTodo(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
    },
    addButton: {
      marginBottom: 10,
    },
    todo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
  });
export default HomeScreen;


  