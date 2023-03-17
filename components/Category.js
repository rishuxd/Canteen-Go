import { View, Text, Image, ImageBackground } from "react-native";

const categories = [
  {
    image: require("../Canteen Go/assets/images/meal.png"),
    title: "Meal",
    description: "Get exciting meal items here, foodie.",
  },
  {
    image: require("./assets/images/burger.png"),
    title: "Snacks",
    description: "Get exciting meal items here, foodie.",
  },
  {
    image: require("./assets/images/donut.png"),
    title: "Deserts",
    description: "Get exciting meal items here, foodie.",
  },
  {
    image: require("./assets/images/drink.png"),
    title: "Drinks",
    description: "Get exciting meal items here, foodie.",
  },
];

export default function Category() {
  return (
    <View>
      {categories.map((category, index) => (
        <View index={index}>
          <RestaurantImage image={category.image} />
          <RestaurantName name={category.title} />
          <RestaurantDescription description={category.description} />
        </View>
      ))}
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={props.image} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
