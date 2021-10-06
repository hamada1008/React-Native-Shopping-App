import React, { useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import styles from "../constants/styles";
import { setFields, setType } from "../Redux/inputsSlicer";
const ProductEditScreen = (props) => {
  const dispatch = useDispatch();
  const edited = props.route.params.type === "edit";
  useEffect(() => {
    dispatch(setType({ id: props.route.params.id || Math.random() }));
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.editLabel}>Title</Text>
      <TextInput
        style={styles.editInput}
        defaultValue={edited ? props.route.params.title : ""}
        onChangeText={(text) => dispatch(setFields({ title: text }))}
      />
      <Text style={styles.editLabel}>Price</Text>
      <TextInput
        style={styles.editInput}
        keyboardType="numeric"
        editable={!edited}
        defaultValue={edited ? props.route.params.price.toString() : ""}
        onChangeText={(text) => dispatch(setFields({ price: Number(text) }))}
      />
      <Text style={styles.editLabel}>Desciption</Text>
      <TextInput
        style={{ ...styles.editInput, height: 100 }}
        defaultValue={edited ? props.route.params.description : ""}
        multiline={true}
        numberOfLines={3}
        onChangeText={(text) => dispatch(setFields({ description: text }))}
      />
      <Text style={styles.editLabel}>Image Url</Text>
      <TextInput
        style={styles.editInput}
        defaultValue={edited ? props.route.params.imageUrl : ""}
        onChangeText={(text) => dispatch(setFields({ imageUrl: text }))}
      />
    </View>
  );
};

export default ProductEditScreen;
