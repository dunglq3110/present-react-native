import { AppDispatch, RootState } from '@/store/store';
import { addTodo, removeTodo, toggleTodo } from '@/store/todoSlice';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

function HomeScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch<AppDispatch>();
  const { todos } = useSelector((state: RootState) => state.todo);
  const [text, setText] = useState<string>("");

  const handleAdd = () => {
    dispatch(addTodo(text));
    setText("");
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    // View == HTML div
    <View style={styles.container}>
      {/* TextInput == HTML input type text */}
      <TextInput
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <View style={styles.addButton}>
        <Button title="Add" onPress={handleAdd} />
      </View>

      {/* FlatList == HTML Unordered list (HTML: ul -> li) */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            {/* TouchableOpacity == HTML Button/Div with onClick event */}
            <TouchableOpacity onPress={() => handleToggle(item.id)}>
              {/* Text == Any HTML heading element or paragraph element */}
              <Text style={{
                textDecorationLine: item.completed ? "line-through" : "none",
                marginHorizontal: 10,
              }}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              {/* It's a Button... */}
              <Button title="Detail" 
                onPress={() => navigation.navigate('Detail', { id: item.id })}
              />
              <Button title="Remove" onPress={() => handleRemove(item.id)} />
            </View>
          </View>
        )}
      />
      <View style={styles.catButton}>
        <Button title="Cat Facts" onPress={() => navigation.navigate("Cat")} />
      </View>
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
    catButton: {
      bottom: 10,
    },
  });
export default HomeScreen;


  