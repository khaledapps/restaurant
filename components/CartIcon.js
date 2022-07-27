import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";

export default function CartIcon({ navigation }) {
  const itemsCount = useSelector((state) => state.cartSlice.items.length);

  return (
    itemsCount > 0 && (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <Icon style={styles.icon} name="shopping-bag" />
        <View style={styles.counterWrapper}>
          <Text style={styles.counterText}>{itemsCount}</Text>
        </View>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "red",
    borderRadius: 60,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "100",
  },
  counterWrapper: {
    borderRadius: 60,
    backgroundColor: "#fff",
    position: "absolute",
    right: -1,
    top: -10,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderColor: "red",
    borderWidth: 1,
  },
  counterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
