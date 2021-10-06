import React from "react";
import { View, Text } from "react-native";
import styles from "../constants/styles";
const MoreDetails = (props) => {
  return props.cartInfo.map((el) => (
    <View key={el.id} style={styles.orderItems}>
      <Text style={styles.orderQty}>
        {(Number(el.tprice) / Number(el.price)).toFixed(0)}
      </Text>
      <Text style={styles.orderTitle}>{el.title}</Text>
      <Text style={styles.orderPrice}>${el.tprice}</Text>
    </View>
  ));
};

export default MoreDetails;
