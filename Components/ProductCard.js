import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "../constants/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlicer";
import { removeProduct } from "../Redux/productSlicer";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer);
  const rightBtnStyle =
    props.rightbtn !== "Delete"
      ? styles.rightbutton
      : { ...styles.rightbutton, backgroundColor: "#f5273c" };
  const leftBtnStyle =
    props.leftbtn !== "Edit"
      ? styles.leftbutton
      : { ...styles.leftbutton, backgroundColor: "orange" };
  const { key, ...rest } = props;
  const handlerightbtn = () => {
    props.rightbtn === "Delete"
      ? dispatch(removeProduct(rest))
      : cartItems.findIndex((el) => el.id === rest.id) === -1 &&
        dispatch(addToCart(rest));
  };
  const handleleftbtn = () => {
    props.leftbtn === "Edit"
      ? props.navigation.navigate("ProductEdit", {
          id: props.id,
          title: props.title,
          price: props.price,
          description: props.description,
          imageUrl: props.imageUrl,
          type: "edit",
        })
      : props.navigation.navigate("productDetail", {
          id: props.id,
          title: props.title,
          price: props.price,
          ownerID: props.ownerID,
          description: props.description,
          imageUrl: props.imageUrl,
        });
  };
  return (
    <View style={styles.productCard}>
      <View>
        <Image style={styles.productImg} source={{ uri: props.imageUrl }} />

        <View>
          <Text style={styles.productTitle}>{props.title}</Text>
        </View>
        <View style={styles.productBottom}>
          <TouchableNativeFeedback onPress={handleleftbtn}>
            <View style={leftBtnStyle}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 12,
                }}
              >
                {props.leftbtn}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.productPrice}>${props.price.toFixed(2)}</Text>

          <TouchableNativeFeedback onPress={handlerightbtn}>
            <View style={rightBtnStyle}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                }}
              >
                {props.rightbtn}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
