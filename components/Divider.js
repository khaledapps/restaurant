import { View, Text } from "react-native";

export default function Divider({
  color = "black",
  width = 1,
  opacity = 0.1,
  margin = 0,
}) {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
        opacity: opacity,
        marginHorizontal: margin,
      }}
    ></View>
  );
}
