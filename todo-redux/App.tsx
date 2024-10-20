import React, { lazy } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import { Provider } from 'react-redux';
import store from './store/store';
import CatFactsScreen from './components/CatFactsScreen';

type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
  Cat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Todo List' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Todo Detail' }} />
          <Stack.Screen name="Cat" component={CatFactsScreen} options={{ title: 'Cat Facts' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}