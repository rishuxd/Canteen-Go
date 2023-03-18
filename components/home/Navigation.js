import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/meal.png"),
    text: "Meal",
  },
  {
    image: require("../../assets/images/burger.png"),
    text: "Snacks",
  },
  {
    image: require("../../assets/images/donut.png"),
    text: "Deserts",
  },
  {
    image: require("../../assets/images/drink.png"),
    text: "Drinks",
  },
  {
    image: require("../../assets/images/meal.png"),
    text: "Meal",
  },
  {
    image: require("../../assets/images/burger.png"),
    text: "Snacks",
  },
  {
    image: require("../../assets/images/donut.png"),
    text: "Deserts",
  },
  {
    image: require("../../assets/images/drink.png"),
    text: "Drinks",
  },
];

export default function Navigation() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.item_container}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingLeft: 20,
  },

  item_container: {
    alignItems: "center",
    marginRight: 30,
  },

  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },

  text: {
    fontSize: 13,
    fontWeight: "900",
  },
});
