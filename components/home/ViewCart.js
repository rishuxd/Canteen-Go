import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ViewCart = ({ navigation }) => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.text}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    zIndex: 999,
  },

  inner: { flexDirection: "row", justifyContent: "center", width: "100%" },

  touchable: {
    backgroundColor: "#228B22",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 250,
    position: "relative",
  },

  text: {
    fontWeight: 500,
    fontSize: 20,
    color: "white",
  },
});

export default ViewCart;
