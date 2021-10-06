import React from "react";
import { View, ScrollView } from "react-native";
import ProductCard from "../Components/ProductCard";
import { useSelector } from "react-redux";
import styles from "../constants/styles";

const MainShopScreen = (props) => {
  var newproducts = useSelector((State) => State.productReducer);

  return (
    <ScrollView>
      <View style={styles.productContainer}>
        {newproducts.map((el) => (
          <ProductCard
            id={el.id}
            ownerID={el.ownerID}
            key={el.id}
            description={el.description}
            title={el.title}
            imageUrl={el.imageUrl}
            price={el.price}
            leftbtn="Details"
            rightbtn="Add to Cart"
            {...props}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default MainShopScreen;
