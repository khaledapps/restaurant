import { View, Text } from "react-native";

export default function ItemDescription({ description }) {
  return (
    <View
      style={{
        padding: 20,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <Text style={{ opacity: 0.5 }}>{description}</Text>
    </View>
  );
}
