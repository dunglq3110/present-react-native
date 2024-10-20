// #region My Commented Code
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// function DetailScreen({ route }: { route: any }) {
//   const { text } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.detailText}>{text}</Text>
//     </View>
//   );
// }
// export default DetailScreen;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginTop: 20,
//   },
// });
// #endregion


// import React from "react";
// import { View, StyleSheet, Text } from "react-native";
// export default function DetailScreen({ route }: { route: any }) {
//   const { text } = route.params
//   return (
//     <View style={styles.container}>
//       <Text style={styles.detailText}>{text}</Text>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   detailText: {
//     fontSize: 18,
//     marginTop: 20,
//   },
// });


import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function DetailScreen({ route }: { route: any }) {
    const { text, id } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.detailText}>ID: {id}</Text>
            <Text style={styles.detailText}>Text: {text}</Text>
        </View>
    )
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