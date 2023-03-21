import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const foods = [
  {
    image: require("../assets/images/meal.png"),
    title: "Thali",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../assets/images/burger.png"),
    title: "Burger",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../assets/images/donut.png"),
    title: "Oreo Nuts",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../assets/images/drink.png"),
    title: "Drinks",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
];

const CartScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Icon name="keyboard-arrow-left" size={25} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
          }}
        >
          {foods.map((food, index) => (
            <View style={styles.menuItemStyle} key={index}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FoodImage food={food} />
                <FoodInfo food={food} />
              </View>
              <View style={{ marginLeft: 20, alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>0</Text>
                <View style={styles.actionBtn}>
                  <Icon name="remove" size={25} color="#fff" />
                  <Icon name="add" size={25} color="#fff" />
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
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>$50</Text>
        </View>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={{ fontWeight: 500, fontSize: 20, color: "white" }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  foodImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
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

const FoodInfo = (props) => (
  <View style={{ marginLeft: 10 }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{ fontSize: 12, color: "#666666" }}>{props.food.desc}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ ...props }) => (
  <View>
    <Image source={props.food.image} style={styles.foodImage} />
  </View>
);

export default CartScreen;
