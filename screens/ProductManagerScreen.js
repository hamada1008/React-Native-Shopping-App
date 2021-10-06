import React from "react";
import { ScrollView, View } from "react-native";
import ProductCard from "../Components/ProductCard";
import { useSelector } from "react-redux";
import styles from "../constants/styles";

const ProductManagerScreen = (props) => {
  const newproducts = useSelector((state) => state.productReducer);
  return (
    <ScrollView>
      <View style={styles.productContainer}>
        {newproducts.map((el) => (
          <ProductCard
            key={el.id}
            id={el.id}
            title={el.title}
            imageUrl={el.imageUrl}
            price={el.price}
            description={el.description}
            rightbtn="Delete"
            leftbtn="Edit"
            {...props}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductManagerScreen;
