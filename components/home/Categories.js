import { Image, StyleSheet, Text, View } from "react-native";
import Category from "./Category";

// const categories = [
//   {
//     id: 1,
//     title: "Burger",
//     image: require("../../assets/category-burger.png"),
//   },
//   {
//     id: 2,
//     title: "Pizza",
//     image: require("../../assets/category-pizza.png"),
//   },
//   {
//     id: 3,
//     title: "Pasta",
//     image: require("../../assets/category-pasta.png"),
//   },
//   {
//     id: 4,
//     title: "Salads",
//     image: require("../../assets/category-salads.png"),
//   },
//   {
//     id: 5,
//     title: "Sweets",
//     image: require("../../assets/category-sweets.png"),
//   },
//   {
//     id: 6,
//     title: "Drinks",
//     image: require("../../assets/category-beverages.png"),
//   },
// ];

import items from "../../Items";

export default function Categories({ navigation }) {
  return (
    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
      {/* Section Title */}
      <View>
        <Text style={{ fontWeight: "600" }}>Menu</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.categoriesWrapper}>
        {items.map((item) => (
          <Category key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
});
