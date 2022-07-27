import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BannerItem from "./BannerItem";

const banners = [
  {
    id: 1,
    image: require("../../assets/banner1.jpg"),
  },
  {
    id: 2,
    image: require("../../assets/banner2.jpg"),
  },
  {
    id: 3,
    image: require("../../assets/banner3.jpg"),
  },
];

export default function Banners() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode={"never"}
      style={styles.bannersScrollView}
    >
      {banners.map((banner) => (
        <BannerItem key={banner.id} banner={banner} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannersScrollView: {
    marginTop: 20,
  },
});
