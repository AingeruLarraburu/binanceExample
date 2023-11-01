import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CoinItem = ({ coin, selected, setselected }) => {
  const establecer = () => {
    setselected(coin.symbol);
  };
  return (
    <TouchableOpacity onPress={establecer} style={styles.containerItem}>
      <View style={styles.coinName}>
        <View style={styles.containerNames}>
          <Text style={styles.text}>{coin.symbol.replace("USDT", "")}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${coin.lastPrice}</Text>
        <Text
          style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}
        >
          {parseFloat(coin.priceChangePercent).toFixed(2)}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;
