import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Divider from "../components/Divider";

export default function DrawerContent({ navigation }) {
  return (
    <ScrollView style={{ paddingTop: 60 }}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ textAlign: "center", color: "red" }}>Home</Text>
      </TouchableOpacity>
      <Divider />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 20,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            opacity: 0.5,
            textAlign: "center",
          }}
        >
          This is a demo app
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Platform.OS == "android" ? 18 : 14,
            textAlign: "center",
            marginTop: 40,
          }}
        >
          For inquiries please contact
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Platform.OS == "android" ? 18 : 14,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          UAE: +971524380328
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Platform.OS == "android" ? 18 : 14,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          SA: +966505454741
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: Platform.OS == "android" ? 14 : 10,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          khaled.almqayyad@gmail.com
        </Text>
      </View>
    </ScrollView>
  );
}
