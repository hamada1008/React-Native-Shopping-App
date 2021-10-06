import { StyleSheet } from "react-native";
import { min } from "react-native-reanimated";
const styles = StyleSheet.create({
  //PRODUCT STYLING
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  productCard: {
    flex: 1,
    width: "70%",
    maxWidth: "90%",
    height: "30%",
    padding: 10,
    borderRadius: 40,
    overflow: "hidden",
    margin: 5,
    elevation: 15,
    backgroundColor: "white",
  },
  productImg: {
    height: 250,
    width: 250,
    maxHeight: 300,
    maxWidth: 300,
    minWidth: 200,
    minHeight: 200,
    borderRadius: 40,
  },
  productContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  productTitle: {
    textAlign: "center",
    transform: [{ translateY: -240 }],
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(238, 238, 238, 0.5)",
    borderRadius: 50,
    width: "90%",
    alignSelf: "center",
  },
  productBottom: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  leftbutton: {
    width: "29%",
    textAlign: "center",
    backgroundColor: "#1fbdcf",
    borderRadius: 30,
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
  },
  rightbutton: {
    width: "29%",
    textAlign: "center",
    color: "green",
    backgroundColor: "blue",
    borderRadius: 30,
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
  },
  productPrice: {
    width: "29%",
    textAlign: "center",
    textAlignVertical: "center",
    height: 30,
    color: "red",
    fontWeight: "bold",
  },
  productButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
  },
  detailText: {
    alignSelf: "flex-start",
    paddingHorizontal: "14%",
    textAlign: "justify",
    paddingVertical: 10,
  },

  //CART STYLING
  totalPrice: {
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
  orderButton: {
    width: "30%",
    height: 34,
    fontWeight: "bold",
    backgroundColor: "#03f8fc",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    marginVertical: 5,
    borderRadius: 15,
  },
  cartItemContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  cartItemTitle: {
    width: "40%",
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 18,
  },
  cartItemPrice: {
    width: "19%",
    height: 20,
    marginLeft: 10,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
    overflow: "hidden",
  },
  cartItemRemove: {
    zIndex: -1,
    height: "100%",
    alignSelf: "center",
    marginLeft: 20,
    marginTop: 6,
  },
  emptyCart: {
    fontSize: 20,
    margin: 30,
    color: "#f25005",
    textAlign: "center",
  },

  //ORDER STYLING
  ordercontainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  order: {
    backgroundColor: "#91ff8f",
    width: "70%",
    flex: 1,
    margin: 20,
    padding: 20,
    elevation: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
  },
  orderItems: {
    flexDirection: "row",
    width: "100%",
    margin: 5,
    padding: 9,
  },
  orderQty: {
    width: "10%",
  },
  orderTitle: {
    width: "65%",
    fontWeight: "bold",
  },
  orderPrice: {
    width: "25%",
    overflow: "hidden",
    height: 20,
  },
  //EDIT SCREEN (INPUTS)
  editLabel: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 5,
  },
  editInput: {
    borderWidth: 1,
    borderRadius: 20,
    width: "70%",
    height: 35,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default styles;
