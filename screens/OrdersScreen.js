import React, { useState } from "react";
import { View, Text, Button, ScrollView, FlatList } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerIcon from "../Components/DrawerIcon";
import MoreDetails from "../Components/MoreDetails";
import { useSelector } from "react-redux";
import { toggleDetails } from "../Redux/ordersSlicer";
import { useDispatch } from "react-redux";
import styles from "../constants/styles";

const Stack = createNativeStackNavigator();
const OrdersScreen = (props) => {
  function OrderComponent() {
    const orders = useSelector((state) => state.orderReducer);
    const dispatch = useDispatch();
    const calculateTotal = (arr) => {
      let total = 0;
      for (let i of arr) {
        total += Number(i.tprice);
      }
      return total;
    };

    const togDetails = (el) => {
      dispatch(toggleDetails({ id: el.order_id }));
    };
    return (
      <ScrollView>
        <View style={styles.ordercontainer}>
          {orders.map((el) => (
            <View key={el.order_id} style={styles.order}>
              <Text
                style={{
                  fontSize: 20,
                  marginVertical: 10,
                  textAlign: "center",
                }}
              >
                Total Price:
                <Text style={styles.totalPrice}>
                  &nbsp;${calculateTotal(el.cartContent).toFixed(2)}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  marginVertical: 10,
                }}
              >
                Order Date: <Text style={styles.totalPrice}>{el.date}</Text>
              </Text>
              <View style={{ width: "100%", alignItems: "center" }}>
                <View style={{ width: "60%", marginVertical: 15 }}>
                  <Button
                    color="#ff7d45"
                    title="toggle details"
                    onPress={() => togDetails(el)}
                  />
                </View>
              </View>
              {el.isShown && (
                <MoreDetails key={el.order_id} cartInfo={el.cartContent} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderComponent}
        options={{
          title: "Order history",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#009933", alignText: "center" },
          headerLeft: () => <DrawerIcon {...props} />,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default OrdersScreen;
