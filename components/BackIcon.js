import { View, Text, Platform, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function BackIcon({ navigation }) {
  return (
    Platform.OS == "ios" && (
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 40,
          left: 20,
        }}
        onPress={() => {
          navigation.goBack();
        }}
        // onPress={() => navigation.toggleDrawer()}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name="menu-left"
            style={{
              fontSize: 26,
              opacity: 0.5,
            }}
          />
          <Text>Back</Text>
        </View>
      </TouchableOpacity>
    )
  );
}
