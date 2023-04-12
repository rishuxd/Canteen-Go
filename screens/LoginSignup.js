import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateSignup, authenticateLogin } from "../service/api";
import { getUser } from "../redux/actions/userAction";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";

const loginInitialValue = true;

const signupInitialValues = {
  name: "",
  course: "",
  phone: "",
  email: "",
  password: "",
};

const loginInitialValues = {
  email: "",
  password: "",
};

const LoginSignup = ({ navigation }) => {
  const [loginOpen, setLoginOpen] = useState(loginInitialValue);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [loginError, setLoginError] = useState(false);

  const dispatch = useDispatch();

  const onInputChange = (name, value) => {
    setSignup({ ...signup, [name]: value });
  };

  const onValueChange = (name, value) => {
    setLogin({ ...login, [name]: value });
  };

  const signupUser = async (navigation) => {
    let response = await authenticateSignup(signup);
    if (!response) return;

    navigation.navigate("Home");
  };

  const loginUser = async (navigation) => {
    let response = await authenticateLogin(login);
    dispatch(getUser(login.email));
    if (response.status === 200) {
      navigation.navigate("Home");
    } else {
      setLoginError(true);
    }
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {loginOpen ? (
          <View style={styles.container}>
            <View style={styles.cont_child}>
              <Text style={styles.onboard_text}>Welcome onboard, Foodie!</Text>
            </View>
            <View style={styles.cont_child}>
              <TextInput
                placeholder="Email/Phone no."
                style={styles.input_box}
                onChangeText={(e) => onValueChange("email", e)}
                value={login.email}
              />
              <TextInput
                placeholder="Password"
                style={styles.input_box}
                onChangeText={(e) => onValueChange("password", e)}
                value={login.password}
              />
              {loginError && (
                <Text style={{ color: "red", marginBottom: 10 }}>
                  Please enter valid username or password !
                </Text>
              )}
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => loginUser(navigation)}
              >
                <Text style={styles.appButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cont_child}>
              <Text
                style={styles.signup_text}
                onPress={() => setLoginOpen(false)}
              >
                New User? SignUp
              </Text>
              <Text style={styles.terms_text}>
                By signing or logging int an account, you accept our{" "}
                <Text style={styles.terms_policy}>Terms of User</Text> and
                <Text style={styles.terms_policy}> Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.cont_child}>
              <Text style={styles.onboard_text}>Welcome onboard, Foodie!</Text>
            </View>
            <View style={styles.cont_child}>
              <TextInput
                placeholder="Name"
                style={styles.input_box}
                onChangeText={(e) => onInputChange("name", e)}
                value={signup.name}
              />
              <TextInput
                placeholder="Course"
                style={styles.input_box}
                onChangeText={(e) => onInputChange("course", e)}
                value={signup.course}
              />
              <TextInput
                placeholder="Phone Number"
                style={styles.input_box}
                onChangeText={(e) => onInputChange("phone", e)}
                value={signup.phone}
              />
              <TextInput
                placeholder="Email Address"
                style={styles.input_box}
                onChangeText={(e) => onInputChange("email", e)}
                value={signup.email}
              />
              <TextInput
                placeholder="Password"
                style={styles.input_box}
                onChangeText={(e) => onInputChange("password", e)}
                value={signup.password}
              />
              <TouchableOpacity
                style={styles.appButtonContainer}
                onPress={() => signupUser(navigation)}
              >
                <Text style={styles.appButtonText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cont_child}>
              <Text
                style={styles.signup_text}
                onPress={() => setLoginOpen(true)}
              >
                Have an account? Login
              </Text>
              <Text style={styles.terms_text}>
                By signing or logging int an account, you accept our{" "}
                <Text style={styles.terms_policy}>Terms of User</Text> and
                <Text style={styles.terms_policy}> Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },

  cont_child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input_box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#A6E3E9",
    marginBottom: 20,
    borderRadius: 4,
    width: 280,
    fontSize: 16,
  },

  onboard_text: {
    fontSize: 30,
    fontWeight: 500,
    color: "#6C00FF",
  },

  appButtonContainer: {
    elevation: 2,
    backgroundColor: "#228B22",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  signup_text: {
    fontSize: 16,
    fontWeight: 500,
    color: "#3C79F5",
    marginBottom: 10,
  },

  terms_text: {
    textAlign: "center",
  },

  terms_policy: {
    color: "#3C79F5",
    textDecorationLine: "underline",
  },
});

export default LoginSignup;
