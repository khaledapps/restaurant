import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Banners from "../components/home/Banners";
import Categories from "../components/home/Categories";

import SearchBar from "../components/home/SearchBar";
import TopPicks from "../components/home/TopPicks";
import Logo from "../components/home/Logo";
import CartIcon from "../components/CartIcon";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />
        <SearchBar navigation={navigation} />
        <Banners />
        <Categories navigation={navigation} />
        <TopPicks navigation={navigation} />
        <TouchableOpacity
          style={{
            position: "absolute",
            // backgroundColor: "red",
            top: 40,
            left: 20,
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
          // onPress={() => navigation.toggleDrawer()}
        >
          <Icon
            name="menu"
            style={{
              fontSize: 42,
              opacity: 0.5,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
      <CartIcon navigation={navigation} />
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
