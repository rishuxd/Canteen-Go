import { View, StyleSheet, Text } from "react-native";
import { Divider } from "@react-native-material/core";
import Navigation from "../components/home/Navigation";
import MenuItems from "../components/home/MenuItems";
import MealSection from "../components/home/MealSection";

const Home = () => {
  return (
    <View>
      <MealSection />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
