import { useEffect, useRef, useState } from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSelectedOptions,
  tempOptions,
} from "../../features/cart/cartSlice";

import Price from "../Price";

export default function ItemOptions({ item }) {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionTap = (option) => {
    let index = selectedOptions.findIndex((o) => o.id == option.id);

    if (index >= 0) {
      setSelectedOptions(selectedOptions.filter((i) => i.id !== option.id));
    } else {
      setSelectedOptions((currOptions) => [...currOptions, option]);
    }
  };

  useEffect(() => {
    dispatch(updateSelectedOptions(selectedOptions));
  }, [selectedOptions]);

  return (
    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
      {item.options.map((optionTitle) => (
        <View
          key={optionTitle.id}
          style={{ marginVertical: 10, width: "100%", flex: 1 }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "red" }}>
            {optionTitle.title}
          </Text>

          {optionTitle.options.map((option, index) => (
            <TouchableOpacity key={option.id} activeOpacity={1}>
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 10,
                  flex: 1,
                  width: "100%",
                }}
              >
                <Image
                  source={option.image}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                />
                <View
                  style={{
                    marginHorizontal: 10,
                    alignItems: "flex-start",
                    flex: 1,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{option.title}</Text>
                  {option.extraPrice ? (
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ color: "gray", opacity: 0.8 }}>+</Text>
                      <Price price={option.extraPrice} isNote />
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={{ flexShrink: 1 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="red"
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "red" }}
                    onPress={(isChecked) => {
                      optionTap(option);
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
