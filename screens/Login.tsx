import * as React from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Text, View } from "../components/Themed";
import { Button } from "react-native-material-ui";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.centerview}>
    </View>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome,Sign In!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <Text style={[styles.text_footer]}>Email ID</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Email ID"
            placeholderTextColor="#666666"
            style={[styles.textInput, {}]}
            autoCapitalize="none"
          />
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            style={[styles.textInput]}
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </Animatable.View>
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
  centerview:{
        alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: "#3DC15A",
  },
  footer: {
    flex: 3,
    width:300,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },

  textInput: {
    flex: 1,
    alignItems:"center",
    
    fontSize: 18,
    paddingLeft: 10,
    color: "#05375a",
  },
 
   button: {
    alignItems: "center",
     width: 150,
    height: 40,
    backgroundColor: "#3DC15A",
     justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    padding: 10
  },

 
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
