import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const foods = [
  {
    image: require("../../assets/images/meal.png"),
    title: "Thali",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/burger.png"),
    title: "Burger",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/donut.png"),
    title: "Oreo Nuts",
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

const styles = StyleSheet.create({
  container: {},

  innerContainer: {
    margin: 20,
  },

  about: {
    marginBottom: 10,
    elevation: 10,
  },

  aboutImages: {
    width: "100%",
    height: 180,
    backgroundColor: "#191825",
    borderRadius: 10,
    flex: 1,
    paddingBottom: 10,
    justifyContent: "flex-end",
  },

  menuItemStyle: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },

  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#865DFF",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default function MealSection() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.about}>
          <ImageBackground
            source={{
              uri: "https://assets.vogue.in/photos/5f8d276e31243af9c390adc4/3:2/w_1079,h_719,c_limit/DIY%20meals.jpg",
            }}
            style={styles.aboutImages}
            imageStyle={{ borderRadius: 10, opacity: 0.7 }}
          >
            <Text
              style={{
                fontSize: 29,
                fontWeight: "600",
                marginHorizontal: 15,
                marginTop: 15,
                color: "#fff",
              }}
            >
              Meals
            </Text>
            <Text
              style={{
                marginHorizontal: 15,
                fontWeight: "400",
                fontSize: 15.5,
                color: "#fff",
              }}
            >
              Get your meals here foodie!
            </Text>
          </ImageBackground>
        </View>
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <FoodImage food={food} />
              <FoodInfo food={food} />
              <FoodButton />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ marginLeft: 10, width: 150, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ ...props }) => (
  <View>
    <Image
      source={props.food.image}
      style={{
        width: 80,
        height: 80,
        resizeMode: "contain",
      }}
    />
  </View>
);

const FoodButton = () => (
  <View style={{ marginRight: 20, alignItems: "center" }}>
    <Text style={{ fontSize: 18 }}>3</Text>
    <View style={styles.actionBtn}>
      <Icon name="remove" size={25} color="#fff" />
      <Icon name="add" size={25} color="#fff" />
    </View>
  </View>
);
