import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { CardField, CardForm, useStripe } from "@stripe/stripe-react-native";
import { useEffect, useState } from "react";
import PaymentButton from "../components/checkout/PaymentButton";

export default function CheckoutScreen({ navigation }) {
  const { confirmPayment } = useStripe();
  const [card, setCard] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: 20,
          paddingHorizontal: 0,
          flex: 1,
          width: "100%",
          backgroundColor: "#fff",
          justifyContent: "center",
        }}
      >
        <CardForm
          postalCodeEnabled={false}
          onFormComplete={(cardDetails) => {
            setCard(cardDetails);
          }}
          cardStyle={{
            backgroundColor: "#FFFFFF",
            textColor: "#000000",
          }}
          autofocus={false}
          style={{ height: 300 }}
        />
      </View>

      {card?.complete && <PaymentButton navigation={navigation} />}
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
