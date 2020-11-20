import * as React from "react";
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
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actionsFile';
import { getUserData } from '../redux/selectors';
  function QuestionTwo(props) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
           <View style={styles.imageheader}>
          <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/llama1.png")}
          style={styles.logo}
        />
        </View>
         <View style={styles.header}>
           <Text style={styles.text}>question 2</Text>
         
         <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={console.log("Yes")} style={styles.button}>
              <Text style={styles.text}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={console.log("No")} style={styles.button}>
              <Text style={styles.text}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.footer]}>
       
           <TouchableOpacity onPress={() =>{props.setQuestion(2)}} style={styles.nextQuestion}>
    <Text style={styles.text}>Next Question</Text>
  </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: "#3DC15A",
  },
 
  logo: {
    width: 200,
    height: 240,
     
  },

nextQuestion:{
   backgroundColor: "#3DC15A",
    borderRadius: 10,
    paddingVertical: 15,    
},
  button: {
   backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },

  buttonContainer: {
    backgroundColor: "#3DC15A",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
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
    width: "90%",
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);
