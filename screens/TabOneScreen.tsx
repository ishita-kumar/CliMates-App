import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

import { Text, View } from "../components/Themed";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { logIn, logOut } from "../redux/actionsFile";
import { getUserData } from "../redux/selectors";
import MonthComponent from "../components/Month";
import FormComponent from "./FormComponent";

function TabOneScreen(props) {
  const months = {
    November: Math.round(props.userData.carbonFootPrintSaved / 100),
    October: "10",
    September: "4",
    August: "3",
    July: "7",
    June: "5",
  };
  const [view, setView] = useState(0);
  const timelineComp = Object.keys(months).map((month, id) => (
    <View style={styles.timelineContainer}>
      <View
        style={
          id == 0
            ? styles.borderTop
            : id == Object.keys(months).length - 1
            ? styles.borderBottom
            : styles.border
        }
      ></View>
      <View style={styles.check}></View>
      <MonthComponent month={month} trees={parseInt(months[month])} />
    </View>
  ));
  const dashbaord = (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {props.userData.userName}, Your Climate Journey
          </Text>
        </View>
        <View style={styles.banner}>
          <View style={styles.OptionsContainer}>
            <Text style={styles.options}>
              {" "}
              <Text style={styles.numberOptions}>
                {props.userData.energySaved}
              </Text>{" "}
              <Text style={styles.subheading}> Kilowatt Energy saved</Text>
            </Text>
          </View>
          <View style={styles.OptionsContainer}>
            <Text style={styles.options}>
              <Text style={styles.numberOptions}>
                {props.userData.carbonFootPrintSaved}
              </Text>{" "}
              <Text style={styles.subheading}> Kg Carbon footprint saved</Text>
            </Text>
          </View>
          <View style={styles.OptionsContainer}>
            <Text style={styles.options}>
              <Text style={styles.numberOptions}>
                {props.userData.carbonFootPrintSaved / 100}
              </Text>
              &nbsp; Trees planted this month
            </Text>
          </View>
        </View>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/Trees.png")}
          style={styles.Trees}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Log in this week’s data</Text>
        <Icon
          raised
          name="plus-circle"
          size={50}
          type="font-awesome"
          color="#3DC15A"
          onPress={() => setView(1)}
        />
      </View>
      <View style={styles.timeline}>{timelineComp}</View>
    </ScrollView>
  );
  return view == 0 ? dashbaord : <FormComponent setView={setView} />;
}

const styles = StyleSheet.create({
  check: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#7A86B1",
    marginLeft: 30,
    marginTop: 30,
  },
  subheading: {
    position: "relative",
    left: -80,
  },
  OptionsContainer: {
    flexDirection: "row",
    marginRight: "auto",
    backgroundColor: "#3DC15A",
  },
  borderBottom: {
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: "#7A86B1",
    height: "100%",
    left: 44,
    position: "absolute",
    bottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    marginRight: "auto",
  },
  borderTop: {
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: "#7A86B1",
    height: "100%",
    left: 44,
    position: "absolute",
    top: 30,
  },
  buttonText: {
    paddingLeft: 50,
    paddingTop: 40,
    fontSize: 25,
  },
  border: {
    borderStyle: "solid",
    borderLeftWidth: 2,
    borderLeftColor: "#7A86B1",
    height: "100%",
    left: 44,
    position: "absolute",
  },
  timelineContainer: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 800,
  },
  timeline: {
    position: "relative",
    maxWidth: 800,
    margin: "auto",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DC15A",
  },
  Trees: {
    alignItems: "flex-start",
  },
  scrollView: {
    backgroundColor: "white",
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
    fontSize: 20,
    padding: 5,
    textAlign: "left",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  numberOptions: {
    // fontFamily: 'Source Sans Pro',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 45,
    color: "#812626",
  },
  header: {
    flex: 20,
    backgroundColor: "#3DC15A",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 30,
    paddingBottom: 0,
    paddingHorizontal: 30,
  },
  button: {
    alignItems: "center",
    width: "70%",
    height: 70,
    backgroundColor: "#3DC15A",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
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

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);
