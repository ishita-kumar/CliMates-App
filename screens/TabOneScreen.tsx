import * as React from "react";
import { StyleSheet } from "react-native";
import {
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import * as Animatable from "react-native-animatable";


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Climate Journey</Text>
        <TouchableOpacity style={styles.button}>
          <Text>November</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Text style={styles.options}>Your Climate Journey</Text>
        <Text style={styles.options}>Your Climate Journey</Text>
        <Text style={styles.options}>Your Climate Journey</Text>
      </View>
          <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/images/Trees.png")}
          style={styles.Trees}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DC15A",
  },
  Trees:{
  
  alignItems:"flex-start"
  
  },
  title: {
    color: "white",
    fontSize: 25,
    padding: 10,
    textAlign: "left",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  options: {
    color: "white",
    fontSize: 20,
    padding: 10,
    textAlign: "left",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  header: {
    flex: 20,
    backgroundColor: "#3DC15A",
    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  button: {
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#3DC15A",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
    padding: 10,
  },
  banner: {
    flex: 100,
    backgroundColor: "#3DC15A",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    marginRight: "auto",

    paddingHorizontal: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
