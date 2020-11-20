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
export default function Welldone() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Text>hi</Text>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/images/Hero.png")}
          style={styles.logo}
        />
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
        <Text style={[styles.title]}>
         Good Job!
        </Text>
          <Text style={[styles.text]}>
        With regularly logging your data, you help us measure your impact on Cilmate change. Afterall, you’re the one who’s going to save the Earth!
        </Text>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 240,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center"
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    marginTop: 5,
    fontSize: 20,
     textAlign:"center"
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
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop:190,
  },

  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
