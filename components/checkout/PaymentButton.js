import { View, Text, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

export default function PaymentButton({ navigation }) {
  const dispatch = useDispatch();

  const handlePayment = () => {
    dispatch(clearCart());
    navigation.navigate("ThankYou");
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
        onPress={() => handlePayment()}
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
            Pay Now
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
