import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, TextInput, ScrollView } from "react-native";
import { Graph } from "./components/graph";

import CoinItem from "./components/CoinItem";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>hola</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.texto}>pepe</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>hola</Text>
        <Text style={styles.texto}>adios</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    paddingTop: 30,
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    textAlign: "center",
    margin: 10,
  },
  scroll: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    padding: 10,
  },
});

export default App;
