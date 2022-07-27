import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Price from "../Price";

export default function TopPicksItem({ navigation, item }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("Item", {
          item,
        })
      }
    >
      <View style={styles.item} key={item.id}>
        <Image source={item.image} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.priceWrapper}>
          <Price price={item.price} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    position: "relative",
    width: 150,
    height: 180,
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderRadius: 10,
    // paddingTop: 0,
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  itemImage: { width: 100, height: 100, resizeMode: "contain" },
  itemTitle: {
    fontWeight: "bold",
    fontSize: Platform.OS == "ios" ? 10 : 12,
    textAlign: "center",
  },
  priceWrapper: {
    position: "absolute",
    bottom: 10,
  },
});
