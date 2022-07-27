import { Image, StyleSheet, View } from "react-native";

export default function BannerItem({ banner }) {
  return (
    <View key={banner.id} style={styles.bannerWrapper}>
      <Image source={banner.image} style={styles.banner} />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover",
  },
  bannerWrapper: {
    padding: 5,
    backgroundColor: "#fff",
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    height: 160,
    width: 320,
    maxWidth: 360,
    marginHorizontal: 10,
    marginVertical: 18,
    borderRadius: 15,
  },
});
