import { RootState } from '@/store/store';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function DetailScreen({ route }: { route: any }) {
  const { id } = route.params;
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{todos.find((todo) => todo.id === id)?.text}</Text>
    </View>
  );
}

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
