// #region
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// };
// function HomeScreen({ navigation }: { navigation: any }) {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [text, setText] = useState("");
//   const handleAddTodo = () => {
//     if (text.trim()) {
//       setTodos([...todos, { id: Date.now(), text: text.trim(), completed: false }]);
//       setText("");
//     }
//   };
//   const toggleTodo = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const removeTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Add a new task"
//         value={text}
//         onChangeText={setText}
//         style={styles.input}
//       />
//       <View style={styles.addButton}>
//         <Button title="Add" onPress={handleAddTodo} />
//       </View>
//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.todo}>
//             <TouchableOpacity onPress={() => toggleTodo(item.id)}>
//               <Text
//                 style={{
//                   textDecorationLine: item.completed ? "line-through" : "none",
//                   marginHorizontal: 10,
//                 }}
//               >
//                 {item.text}
//               </Text>
//             </TouchableOpacity>
//             <View style={styles.buttonContainer}>
//               <Button
//                 title="Detail"
//                 onPress={() => navigation.navigate('Detail', {
//                   text: item.text,
//                   number: 1
//                 })}
//               />
//               <Button title="Remove" onPress={() => removeTodo(item.id)} />
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
//   addButton: {
//     marginBottom: 10,
//   },
//   todo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
// });
// export default HomeScreen;
// #endregion

// import { PreventRemoveContext } from "@react-navigation/native";
// import React, { useState } from "react";
// import { Button, FlatList, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";
// export default function HomeScreen({ navigation }: { navigation: any }) {
//   type Todo = {
//     id: number
//     text: string
//     crossed: boolean
//   }
//   const [todos, setTodos] = useState<Todo[]>([])
//   const [text, setText] = useState("")
//   const addTodo = () => {
//     if (text.trim()) {
//       setTodos([...todos, { id: Date.now(), text: text.trim(), crossed: false }])
//       setText("")
//     }
//   }
//   const removeTodo = (id: number) => {
//     setTodos(todos.filter((todo) => id !== todo.id))
//   }
//   const toggleTodo = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, crossed: !todo.crossed } : todo
//       )
//     )
//   }
//   return (
//     <View style={styles.container}>
//       <TextInput onChangeText={setText} style={styles.input} value={text} placeholder="Add a new task"></TextInput>
//       <Button title="Add" onPress={() => addTodo()}></Button>
//       <FlatList data={todos} keyExtractor={(item) => item.id.toString()} renderItem=
//         {
//           ({ item }) => (
//             <View style={styles.todo}>
//               <TouchableOpacity onPress={() => toggleTodo(item.id)}>
//                 <View style={styles.todo}>
//                   <Text style={{ marginHorizontal: 10, textDecorationLine: item.crossed ? "line-through" : "none" }}>{item.text}</Text>
//                 </View>
//               </TouchableOpacity>
//               <View style={styles.buttonContainer}>
//                 <Button title="Detail" onPress={() => navigation.navigate("Detail", { text: item.text })}></Button>
//                 <Button title="Remove" onPress={() => removeTodo(item.id)}></Button>
//               </View>
//             </View>
//           )
//         }>
//       </FlatList >
//     </View >
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//   },
//   addButton: {
//     marginBottom: 10,
//   },
//   todo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
// });

import React from "react";
import { View, StyleSheet, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import DetailScreen from "./DetailScreen";

type Todo = {
    id: number
    text: string
    crossed: boolean
}

export default function HomeScreen({ navigation }: { navigation: any }) {

    const [todos, setTodos] = useState<Todo[]>([])
    const [text, setText] = useState("")

    const addTodo = () => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text: text.trim(), crossed: false }])
            setText("")
        }
    }

    const delTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const delAll = () => {
        setTodos([])
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, crossed: !todo.crossed } : todo)
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text>Total: {todos.length} </Text>
                <Text>Completed: {todos.filter((todo) => todo.crossed).length}</Text>
                <Text>Uncompleted: {todos.filter((todo) => !todo.crossed).length}</Text>
            </View>
            <TextInput value={text} onChangeText={setText} placeholder="Add a new Todo" style={styles.input}></TextInput>
            <View style={styles.buttonContainer}>
                <Button title="Add" onPress={() => addTodo()} disabled={text.trim().length === 0}></Button>
                <Button title="Clear All" onPress={() => delAll()}></Button>
            </View>
            <FlatList data={todos} keyExtractor={(item) => item.id.toString()} renderItem=
                {
                    ({ item }) => (
                        <View style={styles.todo}>
                            <TouchableOpacity style={styles.todo} onPress={() => toggleTodo(item.id)}>
                                <View style={styles.todo}>
                                    <Text style={{ textDecorationLine: item.crossed ? "line-through" : "none" }}>
                                        {item.text}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.buttonContainer}>
                                <Button title="Detail" onPress={() => navigation.navigate("Detail", { text: item.text, id: item.id })}></Button>
                                <Button title="Remove" onPress={() => delTodo(item.id)}></Button>
                            </View>
                        </View>
                    )
                }>
            </FlatList>
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
        gap: 10
    },
});