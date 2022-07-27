import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useSelector, useDispatch } from "react-redux";
import CheckoutButton from "../components/cart/CheckoutButton";
import Divider from "../components/Divider";
import Price from "../components/Price";
import { getCartItems, removeFromCart } from "../features/cart/cartSlice";

export default function CartScreen({ navigation }) {
  const items = useSelector((state) => getCartItems(state));
  const itemPrice = (item) => {
    let price = item.price;
    for (let i = 0; i < item.additions.length; i++) {
      price += item.additions[i].extraPrice;
    }
    price *= item.quantity;
    return Number(price.toFixed(2));
  };

  const dispatch = useDispatch();
  const removeItemTap = (item) => {
    dispatch(removeFromCart(item));
  };

  const cartTotal = () => {
    let total = 0;
    // for (let i = 0; i < items.length; i++) {
    //   total += items[i].quantity * items[i].price;
    // }
    items.forEach((item) => {
      total += itemPrice(item);
    });
    return Number(total.toFixed(2));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.header}>Cart</Text>
        </View>

        <View>
          {items.map((item, index) => (
            <View key={index} style={styles.itemWrapper}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemData}>
                <Text style={styles.itemName}>{item.name}</Text>
                {item.additions.map((addition, index2) => (
                  <Text key={index2} style={styles.itemDetails}>
                    {addition.title}
                  </Text>
                ))}
                <Text style={styles.itemDetails}>Qty: {item.quantity}</Text>
              </View>
              <View style={styles.priceWrapper}>
                {/* <Text style={styles.price}>{item.quantity * item.price}</Text> */}
                <Price price={itemPrice(item)} size={1.3} />
              </View>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={() => removeItemTap(item)}
              >
                <Icon style={styles.removeIcon} name="delete" />
              </TouchableOpacity>
            </View>
          ))}
          <Divider />
          <View style={styles.totalWrapper}>
            <Text style={{ fontWeight: "bold", fontSize: 20, opacity: 0.3 }}>
              Total
            </Text>
            <Price price={cartTotal()} size={1.5} />
          </View>
        </View>
      </ScrollView>
      <CheckoutButton navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    // backgroundColor: "#f2f6fa",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  itemWrapper: {
    padding: 20,
    flexDirection: "row",
  },
  itemImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  itemData: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
    paddingBottom: 10,
  },
  itemDetails: {
    opacity: 0.5,
  },
  priceWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  totalWrapper: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  removeIcon: {
    fontSize: 26,
    color: "red",
    opacity: 0.5,
  },
  // price: {
  //   fontWeight: "bold",
  //   fontSize: 18,
  // },
});
