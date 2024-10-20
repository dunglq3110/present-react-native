import { clearFacts, getFact } from "@/store/catSlice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function CatFactsScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, facts, breeds } = useSelector((state: RootState) => state.cat);
  
  useEffect(() => {
    dispatch(getFact());
  }, []);

  return (
    <View style={styles.container}>
      <Button title={isLoading ? "Loading..." : "Get 1 fact"} 
        onPress={() => dispatch(getFact())} 
        disabled={isLoading} 
      />
      <FlatList data={facts} 
        keyExtractor={(item) => item.fact} 
        renderItem={({ item }) => (
          <View style={styles.fact}>
            <Text>{item.fact}</Text>
            <Text>Word count: {item.length}</Text>
          </View>
        )} 
      />
      <View style={styles.clearButton}>
        <Button title='Clear' onPress={() => dispatch(clearFacts())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fact: {
    marginVertical: 10,
  },
  clearButton: {
    bottom: 10,
  },
});