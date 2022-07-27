import { View, Text } from "react-native";
import Price from "../Price";

export default function ItemTitle({ item }) {
  return (
    <View
      style={{
        padding: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>{item.name}</Text>
      <Price price={item.price} size={1.4} />
    </View>
  );
}
