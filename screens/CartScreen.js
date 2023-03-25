import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { placeOrder } from "../service/api";

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const CartScreen = ({ navigation }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [orderItems, setOrderItems] = useState(cartItems);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const total = orderItems.reduce(
      (s, i) => (s += i.price.full * i.quantity),
      0
    );
    setTotalAmt(total);
  }, [orderItems]);

  const incrQty = (index) => {
    console.log(cartItems);
    setOrderItems((v) => {
      const a = JSON.parse(JSON.stringify(v));
      a[index].quantity += 1;
      return [...a];
    });
  };

  const decrQty = (index) => {
    setOrderItems((v) => {
      const a = JSON.parse(JSON.stringify(v));
      a[index].quantity -= 1;
      return [...a];
    });
  };

  const checkOut = async () => {
    let response = await placeOrder(orderItems);
    if (!response) return;
    console.log("Order placed");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Icon
          name="keyboard-arrow-left"
          size={25}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        >
          {orderItems.map((food, index) => (
            <View style={styles.menuItemStyle} key={index}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FoodImage food={food} />
                <FoodInfo food={food} />
              </View>
              <View style={{ marginLeft: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>{food.quantity}</Text>
                <View style={styles.actionBtn}>
                  <Icon
                    name="remove"
                    size={25}
                    color="#fff"
                    onPress={() => decrQty(index)}
                  />
                  <Icon
                    name="add"
                    size={25}
                    color="#fff"
                    onPress={() => incrQty(index)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={{ marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Total Price</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>₹{totalAmt}</Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity style={styles.touchable} onPress={() => checkOut()}>
            <Text style={{ fontWeight: 500, fontSize: 20, color: "white" }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const FoodInfo = (props) => (
  <View style={{ marginLeft: 10 }}>
    <Text style={styles.titleStyle}>{props.food.name}</Text>
    <Text style={{ fontSize: 12, color: "#666666" }}>
      {props.food.allergenAlert}
    </Text>
    <Text>₹{props.food.price.full}</Text>
  </View>
);

const FoodImage = ({ ...props }) => (
  <View>
    <Image source={{ uri: props.food.url }} style={styles.foodImage} />
  </View>
);

const styles = StyleSheet.create({
  foodImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  menuItemStyle: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },

  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#228B22",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  touchable: {
    backgroundColor: "#228B22",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default CartScreen;
