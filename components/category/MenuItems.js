import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Divider from "../Divider";
import MenuItem from "../MenuItem";
import Price from "../Price";

// const items = [
//   {
//     id: 1,
//     name: "Cheese Burger",
//     description:
//       "some description of this amazing burger. with multiple lines.",
//     price: 26.99,
//     image: require("../../assets/food1.png"),
//   },
//   {
//     id: 2,
//     name: "Cheese Burger",
//     description:
//       "some description of this amazing burger. with multiple lines.",
//     price: 26.99,
//     image: require("../../assets/food1.png"),
//   },
//   {
//     id: 3,
//     name: "Cheese Burger",
//     description:
//       "some description of this amazing burger. with multiple lines.",
//     price: 26.99,
//     image: require("../../assets/food1.png"),
//   },
//   {
//     id: 4,
//     name: "Cheese Burger",
//     description:
//       "some description of this amazing burger. with multiple lines.",
//     price: 26.99,
//     image: require("../../assets/food1.png"),
//   },
//   ,
//   {
//     id: 5,
//     name: "Cheese Burger",
//     description:
//       "some description of this amazing burger. with multiple lines.",
//     price: 26.99,
//     image: require("../../assets/food1.png"),
//   },
// ];

export default function MenuItems({ navigation, items }) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <MenuItem key={item.id} navigation={navigation} item={item} />
        ))}
      </ScrollView>
    </>
  );
}
