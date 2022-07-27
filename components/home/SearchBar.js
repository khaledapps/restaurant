import { StyleSheet, TextInput, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function SearchBar({ navigation, updateSearch }) {
  const route = useRoute();
  console.log("updateSearch: ", updateSearch);

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        // onFocus={() => {
        //   if (route.name == "Home") {
        //     navigation.navigate("Search");
        //   }
        // }}
        onPressIn={() => {
          if (route.name == "Home") {
            navigation.navigate("Search");
          }
        }}
        autoFocus={route.name == "Search" ? true : false}
        onChangeText={updateSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#eee",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 50,
    width: "90%",
    marginTop: 30,
  },
});
