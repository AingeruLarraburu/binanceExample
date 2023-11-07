import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, FlatList, TextInput } from "react-native";
import { Graph } from "./components/graph";
import { AtomInputDefault } from "./components/mycomp";

import CoinItem from "./components/CoinItem";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setselected] = useState("none");

  const loadData = async () => {
    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr");
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
      <AtomInputDefault></AtomInputDefault>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>
      {selected == "none" ? (
        <FlatList
          style={styles.list}
          data={coins.filter(
            (coin) =>
              coin.symbol.toLocaleLowerCase().includes("USDT".toLocaleLowerCase()) &&
              coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CoinItem coin={item} selected={selected} setselected={setselected} />}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            loadData();
            setRefreshing(false);
          }}
        />
      ) : (
        <Graph style={styles.list} coinId={selected} setselected={setselected} coins={coins} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "90%",
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

export default App;
