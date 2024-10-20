// #region My Commented Code
// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './components/HomeScreen';
// import DetailScreen from './components/DetailScreen';
// type RootStackParamList = {
//   Home: undefined;
//   Detail: { text: string };
// };
// const Stack = createStackNavigator<RootStackParamList>();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Todo List' }} />
//         <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Todo Detail' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// #endregion

// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./components/HomeScreen";
// import DetailScreen from "./components/DetailScreen";
// import { NavigationContainer } from "@react-navigation/native";
// type RootStackParamList = {
//   Home: undefined
//   Detail: { text: string }
// }
// const Stack = createStackNavigator<RootStackParamList>();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: "ToDo List" }}></Stack.Screen>
//         <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "ToDo Detail" }}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./components/HomeScreen"
import DetailScreen from "./components/DetailScreen"
import { NavigationContainer } from "@react-navigation/native"

type RootStackParamList = {
    Home: undefined
    Detail: { text: string }
}
const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Todo List" }}></Stack.Screen>
                <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Todo Detail" }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}