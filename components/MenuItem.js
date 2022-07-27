import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Divider from "./Divider";
import Price from "./Price";

export default function MenuItem({ navigation, item }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("Item", {
          item,
        })
      }
      key={item.id}
    >
      <View style={styles.menuItem}>
        <Image
          source={item.image}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        <View
          style={{
            alignItems: "flex-start",
            marginHorizontal: 10,
            flex: 1,
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 10 }}>
            {item.name}
          </Text>
          <Text>{item.description}</Text>
          <View style={{ marginTop: 10 }}>
            <Price price={item.price} />
          </View>
        </View>
      </View>

      <Divider width={2} color={"rgba(0,0,0,.5)"} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
  },
});
