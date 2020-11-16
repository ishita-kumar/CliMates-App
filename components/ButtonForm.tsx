import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between"
  }
});

export const Button = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={console.log("YEs")} style={styles.button}>
    <Text style={styles.text}>Yes</Text>
  </TouchableOpacity>
  
);
export const YesButton = ({ onPress = () => {} }) => (
  <TouchableOpacity onPress={console.log("NO")} style={styles.button}>
    <Text style={styles.text}>No</Text>
  </TouchableOpacity>
  
);
export const ButtonContainer = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>