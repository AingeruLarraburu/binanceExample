import React from "react";
import { Text, StyleSheet, View } from "react-native";

export function AtomInputDefault() {
  return (
    <View style={styles.root}>
      <Text style={styles.aingeruMl} testID="1:29">
        {`AingeruML`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: 348,
    padding: 10,
    alignItems: "center",
    rowGap: 10,
    columnGap: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2240de",
  },
  aingeruMl: {
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    color: "#777777",
    fontFamily: "Inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
