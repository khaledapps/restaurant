import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Divider from "../components/Divider";
import CategoryHeader from "../components/category/CategoryHeader";
import MenuItems from "../components/category/MenuItems";
import CartIcon from "../components/CartIcon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function CategoryScreen({ navigation, route }) {
  const item = route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", flex: 1, height: "100%" }}
      >
        <CategoryHeader item={item} navigation={navigation} />
        <Divider width={5} margin={0} />

        <MenuItems navigation={navigation} items={item.items} />
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
