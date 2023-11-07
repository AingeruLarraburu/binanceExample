import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export function Graph({ coinId, setselected, coins }) {
  const coin = coins.filter((coin) => coin.symbol.toLocaleLowerCase() == coinId.toLocaleLowerCase())[0];
  const limpiar = () => {
    setselected("none");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={limpiar}>
        <Text style={styles.title}>Back</Text>
      </TouchableOpacity>
      <ScrollView style={styles.ancho} contentContainerStyle={styles.scroll}>
        {Object.keys(coin).map((key) => (
          <View key={key} style={styles.list}>
            <Text style={styles.title}>{key}</Text>
            <Text style={styles.title}>{coin[key]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    width: "100%",
  },
  ancho: {
    flex: 1,
  },
  scroll: {
    backgroundColor: "#242424",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  backButton: {
    borderWidth: 2,
    borderColor: "#FFF",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  list: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});
