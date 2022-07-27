import { StyleSheet, Text, View } from "react-native";

export default function Price({ price, size = 1, isNote = false }) {
  // const priceSize = 14 * size;
  // const currencySize = 10 * size;
  return (
    <View style={styles.priceWrapper}>
      <Text
        style={{
          fontSize: 14 * size,
          fontWeight: "bold",
          marginHorizontal: 5,
          color: isNote ? "gray" : "black",
          opacity: isNote ? 0.8 : 1,
        }}
      >
        {price}
      </Text>
      <Text
        style={{
          fontSize: 10 * size,
          color: isNote ? "gray" : "red",
          opacity: isNote ? 0.8 : 1,
        }}
      >
        AED
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  priceWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  price: {
    // fontSize: 14 * size,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  currency: {
    // fontSize: 10 * size,
    color: "red",
  },
});
