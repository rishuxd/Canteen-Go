import React from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TopBar = () => {
  return (
    <View style={{ margin: 20, marginTop: 50 }}>
      <View style={styles.profileContainer}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>Hello,</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
              Rishu
            </Text>
          </View>
          <Text style={{ fontSize: 18, marginTop: 0, color: "#666666" }}>
            What do you want to have today?
          </Text>
        </View>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/C4D03AQGif0MHAdPSxw/profile-displayphoto-shrink_100_100/0/1657876349127?e=1684972800&v=beta&t=3gM10yNzAveBS9U2nHW0BoGpolPpYx6jafJss71ZIyI",
          }}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1, fontSize: 18 }}
          placeholder="Thali, Burger, Sandwich ..."
        />
        <Icon name="search" size={28} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  inputContainer: {
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#A6E3E9",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 10,
  },
});

export default TopBar;
