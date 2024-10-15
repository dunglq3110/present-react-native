import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DetailScreen({ route }: { route: any }) {
  const { text } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{text}</Text>
    </View>
  );
}
export default DetailScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    detailText: {
      fontSize: 18,
      marginTop: 20,
    },
  });
  

