import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import BackIcon from "../components/BackIcon";
import Logo from "../components/home/Logo";
import SearchBar from "../components/home/SearchBar";
import MenuItem from "../components/MenuItem";

import items from "../Items";

export default function SearchScreen({ navigation }) {
  const [searchItems, setSearchItems] = useState([]);

  const updateSearch = (searchTerm) => {
    setSearchItems(() => {
      let results = [];
      items.forEach((item) => {
        item.items.forEach((i) => {
          if (i.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(i);
          }
        });
      });
      return results;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        {/* <View style={{ flex: 1, backgroundColor: "red", width: "100%" }}> */}
        <Logo />
        <SearchBar navigation={navigation} updateSearch={updateSearch} />
        {searchItems.length ? (
          <ScrollView style={{ marginTop: 20 }}>
            {searchItems.map((item) => (
              <MenuItem key={item.id} navigation={navigation} item={item} />
            ))}
          </ScrollView>
        ) : (
          <></>
        )}
        <BackIcon navigation={navigation} />
      </ScrollView>
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
