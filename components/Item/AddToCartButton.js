import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export default function AddToCartButton({ navigation, item }) {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addToCart(item));
    navigation.goBack();
  };

  return (
    <View
      style={{
        position: "absolute",
        bottom: 10,
        width: "100%",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ width: "90%" }}
        activeOpacity={0.8}
        onPress={() => addItem()}
      >
        <View
          style={{
            backgroundColor: "#EA4747",
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 60,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Add to Cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
