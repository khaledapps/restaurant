import { View, Text, Image } from "react-native";
import BackIcon from "../BackIcon";

export default function CategoryHeader({ navigation, item }) {
  return (
    <View>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 40,
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            flex: 1,
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <BackIcon navigation={navigation} />
        </View>
        <Image
          source={item.image}
          style={{ width: 150, height: 150, resizeMode: "contain" }}
        />
        {/* <Text style={{ fontWeight: "bold", fontSize: 34 }}>Burgers</Text> */}
      </View>
    </View>
  );
}
