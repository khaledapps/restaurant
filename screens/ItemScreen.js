import { View, Text, ScrollView, ImageBackground } from "react-native";
import BackIcon from "../components/BackIcon";
import AddToCartButton from "../components/Item/AddToCartButton";
import ItemHeader from "../components/Item/ItemHeader";
import ItemOptions from "../components/Item/ItemOptions";

export default function ItemScreen({ navigation, route }) {
  const item = route.params.item;

  return (
    <ImageBackground
      source={require("../assets/pattern1.webp")}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.6 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            marginTop: 180,
            flex: 1,
            backgroundColor: "#fff",
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            height: "100%",
            alignSelf: "stretch",
            paddingBottom: 60,
          }}
        >
          <ItemHeader item={item} />

          {item.options && <ItemOptions key={item.id} item={item} />}
        </View>
        <View style={{ position: "absolute", top: 30 }}>
          <BackIcon navigation={navigation} />
        </View>
      </ScrollView>

      <AddToCartButton navigation={navigation} item={item} />
    </ImageBackground>
  );
}
