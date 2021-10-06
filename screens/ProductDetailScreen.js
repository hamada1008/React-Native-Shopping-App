import React from "react";
import { View, Text, Button, Image } from "react-native";
import { addToCart } from "../Redux/cartSlicer";
import { useDispatch } from "react-redux";
import styles from "../constants/styles";

const ProductDetailScreen = (props) => {
  const dispatch = useDispatch();

  const handleClickDetail = () => {
    dispatch(
      addToCart({
        title: props.route.params.title,
        tprice: props.route.params.price,
        price: props.route.params.price,
        id: props.route.params.id,
        ownerID: props.route.params.ownerID,
      })
    );
    props.navigation.pop();
  };

  return (
    <View
      style={{
        ...styles.container,
        justifyContent: "flex-start",
        paddingVertical: "10%",
      }}
    >
      <Image
        source={{ uri: props.route.params.imageUrl }}
        style={{ ...styles.productImg, width: "90%", height: "90%" }}
      />
      <Text style={{ ...styles.detailText, fontWeight: "bold", marginTop: 10 }}>
        Product: {props.route.params.title}
      </Text>
      <Text style={{ ...styles.detailText, color: "red" }}>
        Price: ${props.route.params.price}
      </Text>
      <Text style={{ ...styles.detailText, marginBottom: 20 }}>
        Description: {props.route.params.description}
      </Text>
      <Button title="Add to Cart" onPress={handleClickDetail} />
    </View>
  );
};

export default ProductDetailScreen;
