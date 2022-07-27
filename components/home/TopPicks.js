import { ScrollView, Text, View } from "react-native";
import TopPicksItem from "./TopPicksItem";

// const items = [
//   {
//     id: 1,
//     name: "Veg Burger",
//     image: require("../../assets/food1.png"),
//     price: 26.99,
//   },
//   {
//     id: 2,
//     name: "Pizza",
//     image: require("../../assets/food2.png"),
//     price: 45.95,
//   },
//   {
//     id: 3,
//     name: "Cheese Burger",
//     image: require("../../assets/food3.png"),
//     price: 26.99,
//   },
//   {
//     id: 4,
//     name: "Pasta",
//     image: require("../../assets/food4.png"),
//     price: 18.59,
//   },
// ];

import items from "../../Items";

export default function TopPicks({ navigation }) {
  let topPicks = [];
  items.forEach((item) => {
    item.items.forEach((i) => {
      if (i.isTopPick) topPicks.push(i);
    });
  });
  return (
    <View style={{ marginHorizontal: 15 }}>
      {/* Section Title */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: "600" }}>Top Picks</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginHorizontal: -15 }}
      >
        {topPicks.map((item) => (
          <TopPicksItem key={item.id} item={item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}
