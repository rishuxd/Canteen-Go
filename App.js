import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import CartScreen from "./screens/CartScreen";
import Home from "./screens/Home";
import LoginSignup from "./screens/LoginSignup";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <CartScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
