import React, { Component } from "react";
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
import { Timer, FlipNumber } from "react-native-flip-timer";
import ProgressCircle from 'react-native-progress-circle';

let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

export default class App extends Component {
  state = {
    years: 100,
    days: 7,
    hours: 9,
    min: 12,
    sec: 90,
    msec: 7,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.parent}>
         <ProgressCircle
            percent={70}
            radius={30}
            borderWidth={5}
            color="#19285F"
            shadowColor="#656F95"
            bgColor="#3DC15A"
            
           
        >
           <Text  style={styles.child} >{padToTwo(this.state.years)}</Text>
            
        </ProgressCircle>
          <ProgressCircle
             percent={30}
            radius={30}
            borderWidth={5}
            color="#19285F"
            shadowColor="#656F95"
            bgColor="#3DC15A"
            padding="20"
        >
           <Text style={styles.child}>{padToTwo(this.state.days)}</Text>
        </ProgressCircle>
         
          <ProgressCircle
              percent={40}
            radius={30}
            borderWidth={5}
            color="#19285F"
            shadowColor="#656F95"
            bgColor="#3DC15A"
            padding="20"
        >
           <Text >{padToTwo(this.state.hours)}</Text>
        </ProgressCircle>
         
          <ProgressCircle
            percent={50}
            radius={30}
            borderWidth={5}
            color="#19285F"
            shadowColor="#656F95"
            bgColor="#3DC15A"
            padding="20"
        >
           <Text >{padToTwo(this.state.min)}</Text>
        </ProgressCircle>
         
          <ProgressCircle
           percent={60}
            radius={30}
            borderWidth={5}
            color="#19285F"
            shadowColor="#656F95"
            bgColor="#3DC15A"
            padding="20"
        >
           <Text >{padToTwo(this.state.sec)}</Text>
        </ProgressCircle>
         
       
        </View>


        <View style={styles.CaptionContainer}>
         <Text style={styles.text}>Years</Text>
          <Text style={styles.text}>Days</Text>
           <Text style={styles.text}>Hours</Text>
            <Text style={styles.text}>Minutes</Text>
             <Text style={styles.text}>Seconds</Text>
        
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DC15A",
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
    fontWeight:"bold",
    fontSize: 10,
    color: "#19285F",
     margin:10,
    marginTop: 5,
  },
  parent: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#3DC15A",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },

  child: {
    fontSize: 15,
    color: "black",
  
    borderTopLeftRadius:40,

  },
  chart:{
  width: 95,
  height: 95,
  margin: 10,
  position: "relative",
  
  paddingTop: 22,

  },
  CaptionContainer: {
    backgroundColor: "#3DC15A",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
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
