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
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
function FormComponent(props) {
  const [question, setQuestion] = useState(0); // 0 is this page, 1 is signup 2 is sign in
  useEffect(() => {
    question == 5 ? reset() : null;
  }, [question]);
  const reset = () => {
    setQuestion(0);
    props.setView(0);
  };
  return question === 0 ? (
    <QuestionOne setQuestion={setQuestion} />
  ) : question == 1 ? (
    <QuestionTwo setQuestion={setQuestion} />
  ) : question == 2 ? (
    <QuestionThree setQuestion={setQuestion} />
  ) : question == 3 ? (
    <QuestionFour setQuestion={setQuestion} />
  ) : (
    <QuestionFive setQuestion={setQuestion} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009387',
  },
  logo: {
    width: 200,
    height: 240,
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
    backgroundColor: '#009387',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
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

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
