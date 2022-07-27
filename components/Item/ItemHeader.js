import { View, Text, StyleSheet, Image } from "react-native";
import QuantityButtons from "./QuantityButtons";

import ItemTitle from "./ItemTitle";
import ItemDescription from "./ItemDescription";

export default function ItemHeader({ item }) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <QuantityButtons key={new Date()} />

      <ItemTitle item={item} />

      <ItemDescription description={item.description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
    minHeight: 100,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: "relative",
    top: -60,
  },
});
