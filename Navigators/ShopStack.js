import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainShopScreen from "../screens/MainShopScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ShoppingCartScreen from "../screens/ShoppingCartScreen";
import DrawerIcon from "../Components/DrawerIcon";
import { AntDesign } from "@expo/vector-icons";

const ShopStack = (props) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#4d94ff", alignText: "center" },
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="MainShop"
        options={{
          title: "Main Shop",
          headerLeft: () => <DrawerIcon {...props} />,
          headerRight: () => (
            <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
              <AntDesign name="shoppingcart" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
        component={MainShopScreen}
      />
      <Stack.Screen
        name="Cart"
        options={{ title: "Shopping Cart" }}
        component={ShoppingCartScreen}
      />
      <Stack.Screen
        name="productDetail"
        options={{ title: "Product Details" }}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
