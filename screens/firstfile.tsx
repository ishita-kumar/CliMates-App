import * as React from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, View } from "../components/Themed";
import { Button } from "react-native-material-ui";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Text>hi</Text>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/images/llama1.png")}
          style={styles.logo}
        />
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
        <Text style={[styles.title]}>
          Help the environment, one click at a time!
        </Text>

        <View style={styles.buttons}>
          <Text style={styles.text}>Sign in with account</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("touchable opacity pressed")}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.text}>New User? Try Now!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("touchable opacity pressed")}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009387",
  },
  logo: {
    width: 200,
    height: 240,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#009387",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    padding: 10,
  },

  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009387",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
