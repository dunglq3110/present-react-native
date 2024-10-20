import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Duy dep trai!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


