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
import { Icon } from "react-native-elements";
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actionsFile';
import { getUserData } from '../redux/selectors';
function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}></View>
      <View style={styles.logocontainer}>
        <Image
          source={require("../assets/images/Hero.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Rishabh Gajra</Text>
      </View>

      <View style={styles.banner}>
      <View style={styles.optionscontainer}>
       <Icon
          raised
          name="pencil"
          size={15}
          type="font-awesome"
          color="#009387"
          onPress={() => console.log("hello")}
        />
       <Text style={styles.options}>Email ID</Text>
       
          <Text style={styles.text}>rgajra@iu.edu</Text>
      </View>
        <View style={styles.optionscontainer}>
         <Icon
          raised
          name="pencil"
          size={15}
          type="font-awesome"
          color="#009387"
          onPress={() => console.log("hello")}
        />
       <Text style={styles.options}>Password</Text>
       
          <Text style={styles.text}>******</Text>
      </View>
        <View style={styles.optionscontainer}>
          <Icon
          raised
          name="pencil"
          size={15}
          type="font-awesome"
          color="#009387"
          onPress={() => console.log("hello")}
        />
       <Text style={styles.options}>Address</Text>
      
          <Text style={styles.text}>565, West Amaryllis Drive</Text>
      </View>
    
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.logOut()}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
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
    backgroundColor: "#fff",
  },
  text: {
    color: "grey",
    marginTop: 5,
    marginLeft: 10,
  },
    optionscontainer: {
    
    flexDirection: "row",
    marginRight: "auto",
    
  },
  logocontainer: {
    flex: 20,
    flexDirection: "row",
    marginRight: "auto",
    padding: 40,
  },
  logo: {
    height: 50,
    width: 50,
  },
  title: {
    color: "black",
    fontSize: 25,
    padding: 10,
    textAlign: "left",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  button: {
    alignItems: "center",
    width: 150,
    height: 40,
    backgroundColor: "#009387",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
    padding: 10,
  },

  options: {
    color: "black",
    fontSize: 20,
    padding: 10,
    textAlign: "left",
    letterSpacing: -0.02,
    fontWeight: "600",
  },
  header: {
    flex: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,

    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  banner: {
    flex: 100,
    backgroundColor: "#fff",
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
const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
