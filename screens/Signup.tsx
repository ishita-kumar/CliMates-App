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
import { TextInput } from 'react-native-paper';

function Signup(props) {
  const [user, setUser] = useState(props.userData); // 0 is this page, 1 is signup 2 is sign in
  const handleSignUp = () => {
    console.log(user);
    props.logIn(user);

    // console.log(props.userData.userName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerview}></View>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome,Sign Up!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <View style={styles.action}>
          <TextInput
            label="Username"
            selectionColor="#3DC15A"
            underlineColor="#3DC15A"
            style={styles.textInput}
            value={user.userName}
            onChangeText={(text) => setUser({ ...user, userName: text })}
          />
        </View>
        <View style={styles.action}>
          <TextInput
            label="Password"
            selectionColor="#3DC15A"
            underlineColor="#3DC15A"
            style={styles.textInput}
            textContentType="newPassword"
            secureTextEntry={true}
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.setView(2)}
          >
            <Text>Sign In Instead</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignUp()}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DC15A',
  },
  centerview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: '#3DC15A',
  },
  footer: {
    flex: 3,
    width: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',

    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',

    fontSize: 18,
  },

  textInput: {
    color: '#05375a',
    backgroundColor: 'white',
  },

  button: {
    alignItems: 'center',
    minWidth: 100,
    height: 40,
    backgroundColor: '#3DC15A',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    padding: 10,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  action: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
  },
});

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
