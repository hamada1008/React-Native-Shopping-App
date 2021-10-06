import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native";

const DrawerIcon = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.navigation.openDrawer()}>
      <AntDesign name="bars" size={24} color="white" />
    </TouchableNativeFeedback>
  );
};

export default DrawerIcon;
