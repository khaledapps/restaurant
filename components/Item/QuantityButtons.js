import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { updateQuantity } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function QuantityButtons() {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateQuantity(quantity));
  }, [quantity]);

  return (
    <View style={{ paddingBottom: 40 }}>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={() => {
            setQuantity((qty) => {
              return qty > 1 ? qty - 1 : qty;
            });
          }}
        >
          <View style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              -
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            {quantity}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setQuantity((qty) => qty + 1);
          }}
        >
          <View style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              +
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsWrapper: {
    backgroundColor: "#EA4747",
    borderRadius: 60,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
});
