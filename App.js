import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import LoginSignup from "./screens/LoginSignup";
import store from "./redux/store";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginSignup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
