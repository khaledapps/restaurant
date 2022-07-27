import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Category({ navigation, item }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Category", {
          item,
        })
      }
      activeOpacity={1}
    >
      <View key={item.id} style={styles.category}>
        <Image source={item.image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {
    // flex: 1,
    backgroundColor: "#fff",
    width: 110,
    height: 130,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    borderRadius: 10,
    padding: 20,
    paddingTop: 0,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    position: "relative",
    top: -10,
  },
  categoryText: {
    // fontSize:
    fontWeight: "bold",
    fontSize: Platform.OS == "ios" ? 12 : 16,
  },
});
