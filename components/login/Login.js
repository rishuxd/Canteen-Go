import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.cont_child}>
        <Text style={styles.onboard_text}>Welcome onboard, Foodie!</Text>
      </View>
      <View style={styles.cont_child}>
        <TextInput placeholder="Email/Phone no." style={styles.input_box} />
        <TextInput placeholder="Password" style={styles.input_box} />
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cont_child}>
        <Text style={styles.signup_text}>New User? SignUp</Text>
        <Text style={styles.terms_text}>
          By signing or logging int an account, you accept our{" "}
          <Text style={styles.terms_policy}>Terms of User</Text> and
          <Text style={styles.terms_policy}> Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#F2DEBA",
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
    backgroundColor: "#2DCDDF",
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
