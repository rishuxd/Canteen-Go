import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

const foods = [
  {
    image: require("../../assets/images/meal.png"),
    title: "Thali",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/burger.png"),
    title: "Burger",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/donut.png"),
    title: "Oreo Nuts",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/drink.png"),
    title: "Drinks",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/meal.png"),
    title: "Meal",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/burger.png"),
    title: "Snacks",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/donut.png"),
    title: "Deserts",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
  {
    image: require("../../assets/images/drink.png"),
    title: "Drinks",
    desc: "Rice, Dal, Roti, Sabji",
    price: "₹ 50",
  },
];

const styles = StyleSheet.create({
  container: {},

  innerContainer: {
    marginHorizontal: 20,
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
    backgroundColor: "#865DFF",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  aboutTitle: {
    fontSize: 29,
    fontWeight: "600",
    marginHorizontal: 15,
    marginTop: 15,
    color: "#fff",
  },

  aboutDesc: {
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
    color: "#fff",
  },

  dropdownActive: {
    opacity: 1,
    backfaceVisibility: "visible",
  },

  foodImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});

export default function DesertSection() {
  const [open, setOpen] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.about}
          onPress={() => {
            setOpen(!open);
          }}
        >
          <ImageBackground
            source={{
              uri: "https://media.istockphoto.com/id/1185515984/photo/christmas-baking-table-scene-with-assorted-sweets-and-cookies-top-view-over-a-rustic-wood.jpg?s=612x612&w=0&k=20&c=cWVTyQfwrge2OfuWsRCAlDbZ9fSZO6pg_yuiGq9naLs=",
            }}
            style={styles.aboutImages}
            imageStyle={{ borderRadius: 10, opacity: 0.6 }}
          >
            <Text style={styles.aboutTitle}>Deserts</Text>
            <Text style={styles.aboutDesc}>
              Get your awesome sweets here foodie!
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        {open && (
          <View>
            {foods.map((food, index) => (
              <View key={index}>
                <View style={styles.menuItemStyle}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <FoodImage food={food} />
                    <FoodInfo food={food} />
                  </View>
                  <Button title="ADD" />
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ marginLeft: 15 }}>
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

const FoodButton = () => (
  <View style={{ marginLeft: 20, alignItems: "center" }}>
    <Text style={{ fontSize: 18 }}>3</Text>
    <View style={styles.actionBtn}>
      <Icon name="remove" size={25} color="#fff" />
      <Icon name="add" size={25} color="#fff" />
    </View>
  </View>
);
