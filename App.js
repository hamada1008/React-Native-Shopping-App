import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import OrdersScreen from "./screens/OrdersScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopStack from "./Navigators/ShopStack";
import ProductManagerStack from "./Navigators/ProductManagerStack";
import "react-native-gesture-handler";
import store from "./Redux/store";
import { Provider } from "react-redux";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MainShop">
          <Drawer.Screen
            name="MainShopScreen"
            component={ShopStack}
            options={{
              headerShown: false,
              title: "Shop",
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="ProductManagerScreen"
            component={ProductManagerStack}
            options={{ headerShown: false, title: "Product Manager" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
