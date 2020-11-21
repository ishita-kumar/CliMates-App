import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actionsFile';
import { getUserData } from '../redux/selectors';
import Login from './Login';
import Signup from './Signup';
function TabOneScreen(props) {
  const [view, setView] = useState(0); // 0 is this page, 1 is signup 2 is sign in
  useEffect(() => {
    // Check if user has logged in
    console.log(props.userData.userName, 'landing');
    !props.userData.loggedIn
      ? props.setLoggedin(false)
      : props.setLoggedin(true);
  }, [props.userData]);
  const routingPage = (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
     
      <View style={styles.header}>
       <Text style={[styles.title]}>
      Enviroad
        </Text>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/images/Enviroad.png")}
          style={styles.logo}
        />
         
      </View>
      <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
    

        <Text style={[styles.title]}>
     Your road to a better World!
        </Text>

        <View style={styles.buttons}>
          <Text style={styles.text}>Sign In</Text>
          <TouchableOpacity style={styles.button} onPress={() => setView(2)}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.text}>New User? Try Now!</Text>
          <TouchableOpacity style={styles.button} onPress={() => setView(1)}>
            <Text>Create Account</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
  return view === 0 ? (
    routingPage
  ) : view == 1 ? (
    <Signup setView={setView} />
  ) : view == 2 ? (
    <Login setView={setView} />
  ) : (
    routingPage
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DC15A",
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    marginTop: 5,
   
  },
  button: {
    alignItems: 'center',
    width: 150,
    height: 40,
    backgroundColor: "#3DC15A",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: 'row',
    padding: 10,
  },

  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3DC15A",
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);
