import { View, StyleSheet, Text, ScrollView } from "react-native";
import MealSection from "../components/home/MealSection";
import DrinkSection from "../components/home/DrinkSection";
import SnackSection from "../components/home/SnacksSection";
import DesertSection from "../components/home/DesertSection";
import TopBar from "../components/home/TopBar";
import ViewCart from "../components/home/ViewCart";

const Home = () => {
  return (
    <View style={{ marginTop: 0, height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <DrinkSection />
        <MealSection />
        <SnackSection />
        <DesertSection />
      </ScrollView>
      <ViewCart />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
