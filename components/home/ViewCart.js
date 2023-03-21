import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const ViewCart = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 15,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.touchable}>
          <Text style={{ fontWeight: 500, fontSize: 20 }}>Checkout</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="shoppingcart" size={28} />
            <Text style={{ fontWeight: 500, fontSize: 20 }}>6</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginTop: 20,
    backgroundColor: "#A6E3E9",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 250,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ViewCart;
