import { SafeAreaView } from "react-native";
import { View, StyleSheet } from "react-native";
import Login from "../components/login/Login";
import Signup from "../components/login/Signup";

const LoginSignup = () => {
  const [loginPage, setLoginPage] = useState(true);

  return <>{false ? <Login /> : <Signup />}</>;
};

const styles = StyleSheet.create({});

export default LoginSignup;
