import { View, Text, StyleSheet, Platform } from "react-native";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import ConfirmButton from "../components/map/ConfirmLocationButton";

const initialRegion = {
  latitude: 25.199882693454402,
  longitude: 55.2526743982213,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [isLocationSet, setIsLocationSet] = useState(false);
  //   const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (!isLocationSet) {
        setLocation(location);
        setIsLocationSet(true);
      }
    })();
  }, [location]);

  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "#fff", paddingTop: 70, paddingBottom: 30 }}
      >
        <Text
          style={{
            fontSize: Platform.OS == "android" ? 24 : 18,
            fontWeight: "bold",
          }}
        >
          Delivery Location
        </Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location
            ? location.coords.latitude
            : initialRegion.latitude,
          longitude: location
            ? location.coords.longitude
            : initialRegion.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: location
            ? location.coords.latitude
            : initialRegion.latitude,
          longitude: location
            ? location.coords.longitude
            : initialRegion.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      <View style={styles.markerWrapper}>
        <Icon name="map-marker" style={styles.markerIcon} />
      </View>
      <ConfirmButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  markerWrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  markerIcon: {
    fontSize: 48,
    marginLeft: -24,
    // marginTop: 22,
    marginTop: Platform.OS == "android" ? 22 : 0,
    color: "red",
  },
});
