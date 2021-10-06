import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductEditScreen from "../screens/ProductEditScreen";
import ProductManagerScreen from "../screens/ProductManagerScreen";
import DrawerIcon from "../Components/DrawerIcon";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { addNewProduct } from "../Redux/productSlicer";
import { resetFields } from "../Redux/inputsSlicer";
import { useSelector, useDispatch } from "react-redux";

const ProductManagerStack = (props) => {
  const Stack = createNativeStackNavigator();
  const newproducts = useSelector((state) => state.productReducer);
  const inputDetails = useSelector((state) => state.inputReducer);
  const dispatch = useDispatch();

  const tickcheck = () => {
    dispatch(addNewProduct(inputDetails));
    dispatch(resetFields());
    props.navigation.navigate("ProductManager");
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#df80ff", alignText: "center" },
        headerTitleAlign: "center",
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="ProductManager"
        component={ProductManagerScreen}
        options={{
          title: "Product Manager",
          headerLeft: () => <DrawerIcon {...props} />,
          headerRight: () => (
            <AntDesign
              name="pluscircleo"
              size={24}
              color="white"
              onPress={() =>
                props.navigation.navigate("ProductEdit", { type: "normal" })
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductEdit"
        component={ProductEditScreen}
        options={{
          title: "Product Editor",
          headerRight: () => (
            <Ionicons
              name="checkmark-circle-outline"
              size={24}
              color="white"
              onPress={tickcheck}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductManagerStack;
