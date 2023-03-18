import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "@react-native-material/core";

const foods = [
  {
    image: require("../../assets/images/meal.png"),
    title: "Meal",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/burger.png"),
    title: "Snacks",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/donut.png"),
    title: "Deserts",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/drink.png"),
    title: "Drinks",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/meal.png"),
    title: "Meal",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/burger.png"),
    title: "Snacks",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/donut.png"),
    title: "Deserts",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/drink.png"),
    title: "Drinks",
    price: "₹ 50",
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={props.food.image}
      style={{
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginLeft: marginLeft,
      }}
    />
  </View>
);
