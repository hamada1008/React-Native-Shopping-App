import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../Redux/cartSlicer";
import { dispatchOrder } from "../Redux/ordersSlicer";
import styles from "../constants/styles";

const ShoppingCartScreen = (props) => {
  const cart = useSelector((State) => State.cartReducer);
  const dispatch = useDispatch();
  var total = 0;
  for (let i of cart) {
    total += Number(i.tprice);
  }

  const confirmOrder = () => {
    if (cart.length !== 0) {
      dispatch(dispatchOrder(cart));
      dispatch(resetCart());
      props.navigation.goBack();
    }
  };
  return (
    <ScrollView>
      <Text style={{ fontSize: 20, marginLeft: 30, marginVertical: 10 }}>
        Your total is :
        <Text style={styles.totalPrice}>&nbsp;$ {total.toFixed(2)}</Text>
      </Text>
      <TouchableNativeFeedback onPress={confirmOrder}>
        <View style={styles.orderButton}>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            ORDER
          </Text>
        </View>
      </TouchableNativeFeedback>
      {cart.length !== 0 ? (
        cart.map((el) => (
          <View key={el.id}>
            <CartItem
              title={el.title}
              id={el.id}
              OwnerID={el.OwnerID}
              price={el.price}
            />
          </View>
        ))
      ) : (
        <Text style={styles.emptyCart}>
          Your shopping cart is empty, Please add some products
        </Text>
      )}
    </ScrollView>
  );
};

export default ShoppingCartScreen;
