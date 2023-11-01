import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, TextInput } from "react-native";
import { Graph } from "./components/graph";

import CoinItem from "./components/CoinItem";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    textAlign: "center",
  },
});

export default App;
