import * as React from "react";
import { Icon } from "react-native-elements";

import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Text, View } from "../components/Themed";
import { connect } from "react-redux";
import { logIn, logOut } from "../redux/actionsFile";
import { getUserData } from "../redux/selectors";
import { Checkbox } from "react-native-paper";

function QuestionFour(props) {
  const [carbon, setCarbon] = React.useState(0);
  const [options, setOptions] = React.useState({
    cans: false,
    plastic: false,
    news: false,
    glass: false,
    mags: false,
  });
  const carbonValues = {
    cans: 3.3,
    plastic: 1.4,
    glass: 0.95,
    news: 4.3,
    mags: 1,
  };
  const handleNext = () => {
    let c = carbon;
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        c = c + carbonValues[key];
      }
    }
    props.addCarbon(Math.round(c));
    props.setQuestion(4);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageheader}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/Recycle.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>
          Which of the following products do you recycle?{" "}
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.cans ? "checked" : "unchecked"}
                onPress={() => {
                  setOptions({ ...options, cans: !options.cans });
                }}
              />
            </View>
            <Text style={styles.buttonText}>Aluminum & steel cans</Text>
          </View>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.plastic ? "checked" : "unchecked"}
                onPress={() => {
                  setOptions({ ...options, plastic: !options.plastic });
                }}
              />
            </View>

            <Text style={styles.buttonText}>Plastic</Text>
          </View>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.glass ? "checked" : "unchecked"}
                onPress={() => {
                  setOptions({ ...options, glass: !options.glass });
                }}
              />
            </View>

            <Text style={styles.buttonText}>Glass</Text>
          </View>

          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.news ? "checked" : "unchecked"}
                onPress={() => {
                  setOptions({ ...options, news: !options.news });
                }}
              />
            </View>

            <Text style={styles.buttonText}>Newspaper</Text>
          </View>

          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.mags ? "checked" : "unchecked"}
                onPress={() => {
                  setOptions({ ...options, mags: !options.mags });
                }}
              />
            </View>
            <Text style={styles.buttonText}>Magazines</Text>
          </View>
        </View>
      </View>
      <View style={styles.nextt}>
        <Icon
          raised
          name="arrow-right"
          type="font-awesome"
          color="#f50"
          style={styles.nextt}
          onPress={() => {
            handleNext();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: "#19285F",
    borderWidth: 1,
    backgroundColor: "#3DC15A",
    height: 35,
  },
  checkRow: {
    backgroundColor: "#3DC15A",
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  nextt: {
    backgroundColor: "#3DC15A",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#3DC15A",
  },
  buttonText: {
    fontSize: 25,
    color: "black",
    marginLeft: 10,
  },
  logo: {
    width: 250,
    height: 240,
  },

  nextQuestion: {
    backgroundColor: "#812626",
    borderRadius: 10,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: "#3DC15A",
    flexDirection: "column",
    // flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: "flex-start",
  },
  header: {
    flex: 20,
    backgroundColor: "#3DC15A",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  imageheader: {
    flex: 20,
    backgroundColor: "#3DC15A",
    borderTopLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
  },
  footer: {
    flex: 8,
    backgroundColor: "#3DC15A",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
  },

  text: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between",
  },
});

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionFour);
