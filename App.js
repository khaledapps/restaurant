import { I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {  } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { store } from "./store";
import { Provider } from "react-redux";
import { initStripe } from "@stripe/stripe-react-native";
import { LogBox } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import ItemScreen from "./screens/ItemScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import MapScreen from "./screens/MapScreen";
import { useEffect } from "react";
import ThankYouScreen from "./screens/ThankYouScreen";
import DrawerContent from "./screens/DrawerContent";
import SearchScreen from "./screens/SearchScreen";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  I18nManager.allowRTL(false);
  useEffect(() => {
    initStripe({
      publishableKey:
        "pk_test_51J3lbcB0RIvnxhfSHK0ItZ9RdTtI5vGFkRBqgp7Tn7743lqGFnS65dsv61W5482pYdURvjW8MyPcabIoJv3Zk5rW00nc1rQVEk",
      merchantIdentifier: "merchant.identifier",
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            gestureEnabled: true,
            gestureDirection: "horizontal",
          }}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />

          <Drawer.Screen name="Category" component={CategoryScreen} />

          <Drawer.Screen name="Item" component={ItemScreen} />

          <Drawer.Screen name="Cart" component={CartScreen} />

          <Drawer.Screen name="Map" component={MapScreen} />

          <Drawer.Screen name="Checkout" component={CheckoutScreen} />

          <Drawer.Screen name="ThankYou" component={ThankYouScreen} />

          <Drawer.Screen name="Search" component={SearchScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
