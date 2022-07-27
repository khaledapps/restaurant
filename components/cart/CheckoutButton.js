import { View, Text, Button, TouchableOpacity } from "react-native";

export default function AddToCartButton({ navigation }) {
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
        onPress={() => navigation.navigate("Map")}
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
            Checkout
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
