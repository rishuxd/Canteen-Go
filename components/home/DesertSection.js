import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

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

export default function DesertSection({ products }) {
  const [open, setOpen] = useState(false);
  const [quantity] = useState(1);

  const dispatch = useDispatch();

  const addItemToCart = (id) => {
    dispatch(addToCart(id, quantity));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            {products
              .filter((item) => item.category == "Sweets")
              .map((product, index) => (
                <View key={index}>
                  <View style={styles.menuItemStyle}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <FoodImage food={product} />
                      <FoodInfo food={product} />
                    </View>
                    <Button
                      title="ADD"
                      onPress={() => addItemToCart(product.id)}
                    />
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
  innerContainer: {
    marginHorizontal: 20,
    marginBottom: 75,
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
