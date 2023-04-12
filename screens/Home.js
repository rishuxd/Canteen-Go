import { ScrollView, View } from "react-native";
import MealSection from "../components/home/MealSection";
import DrinkSection from "../components/home/DrinkSection";
import SnackSection from "../components/home/SnacksSection";
import DesertSection from "../components/home/DesertSection";
import TopBar from "../components/home/TopBar";
import ViewCart from "../components/home/ViewCart";
import { useEffect } from "react";
import { getProducts } from "../redux/actions/productAction";
import { getUser } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const Home = ({ navigation }) => {
  const { products } = useSelector((state) => state.getProducts);
  const { user } = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(), getProducts());
  }, [dispatch]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar />
        <DrinkSection products={products} />
        <MealSection products={products} />
        <SnackSection products={products} />
        <DesertSection products={products} />
      </ScrollView>
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default Home;
