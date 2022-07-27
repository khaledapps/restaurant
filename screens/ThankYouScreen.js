import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ThankYouScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
          paddingHorizontal: 0,
          flex: 1,
          width: "100%",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          name="check-circle"
          style={{ fontSize: 100, color: "limegreen" }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 36,
            opacity: 0.5,
            marginTop: 20,
          }}
        >
          Thank You
        </Text>
        <TouchableOpacity
          style={{ marginTop: 40 }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "blue", fontSize: 16 }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
    // backgroundColor: "#f2f6fa",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
