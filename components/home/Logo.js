import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View style={{ alignItems: "center", marginTop: -20 }}>
      <Image
        style={{ width: 80, height: 80, marginTop: 40 }}
        source={require("../../assets/logo.png")}
        resizeMode={"cover"} // cover or contain its upto you view look
      />
    </View>
  );
}
