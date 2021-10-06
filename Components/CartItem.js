import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import NumericInput from "react-native-numeric-input";
import { Octicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateTotalPrice } from "../Redux/cartSlicer";
import styles from "../constants/styles";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((State) => State.cartReducer);
  const [qty, setQty] = useState(1);
  const handlechange = (e) => {
    setQty(e);
  };
  useEffect(() => {
    dispatch(updateTotalPrice({ id: props.id, quantity: qty }));
  }, [qty]);

  return (
    <ScrollView key={props.key}>
      <View style={styles.cartItemContainer}>
        <NumericInput
          value={qty}
          totalWidth={60}
          totalHeight={50}
          onChange={handlechange}
          rounded={true}
          valueType="integer"
          type="up-down"
          minValue={1}
          validateOnBlur
        />
        <Text style={styles.cartItemTitle}>{props.title}</Text>
        <Text style={styles.cartItemPrice}>
          ${cart.find((el) => el.id === props.id).tprice}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart({ id: props.id }))}
        >
          <Octicons
            name="trashcan"
            size={40}
            color="black"
            style={styles.cartItemRemove}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartItem;
