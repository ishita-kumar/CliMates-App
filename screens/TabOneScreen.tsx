import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import { Text, View } from '../components/Themed';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actionsFile';
import { getUserData } from '../redux/selectors';
import MonthComponent from '../components/Month';
import FormComponent from './FormComponent';

function TabOneScreen(props) {
  const months = {
    November: Math.round(props.userData.carbonFootPrintSaved / 100),
    October: '10',
    September: '4',
    August: '3',
    July: '7',
    June: '5',
  };
  const [view, setView] = useState(0);

  // const [user, setUser] = useState(props.userData);
  useEffect(() => {
    // Check if user has logged in
    // !props.userData.loggedIn ? onButtonClick() : null;
  }, [props.userData]);
  const onButtonClick = () => {
    // Restart();
  };
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
          <Text style={styles.options}>
            {' '}
            <Text style={styles.numberOptions}>
              {props.userData.energySaved}
            </Text>
            Kw Energy saved
          </Text>
          <Text style={styles.options}>
            <Text style={styles.numberOptions}>
              {props.userData.carbonFootPrintSaved}
            </Text>
            kg Carbon footprint saved
          </Text>
          <Text style={styles.options}>
            <Text style={styles.numberOptions}>
              {props.userData.carbonFootPrintSaved / 100}
            </Text>
            &nbsp; Trees planted this month
          </Text>
        </View>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/Trees.png')}
          style={styles.Trees}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setView(1)}>
          <Text style={styles.buttonText}>Log in this week’s data</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timeline}>{timelineComp}</View>
    </ScrollView>
  );
  return view == 0 ? dashbaord : <FormComponent setView={setView}/>;
}

const styles = StyleSheet.create({
  check: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7A86B1',
    marginLeft: 30,
    marginTop: 30,
  },
  borderBottom: {
    borderStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: '#7A86B1',
    height: '100%',
    left: 44,
    position: 'absolute',
    bottom: 40,
  },
  buttonContainer: {
    width: '100%',
  },
  borderTop: {
    borderStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: '#7A86B1',
    height: '100%',
    left: 44,
    position: 'absolute',
    top: 30,
  },
  buttonText: {
    fontSize: 20,
  },
  border: {
    borderStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: '#7A86B1',
    height: '100%',
    left: 44,
    position: 'absolute',
  },
  timelineContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 800,
  },
  timeline: {
    position: 'relative',
    maxWidth: 800,
    margin: 'auto',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DC15A',
  },
  Trees: {
    alignItems: 'flex-start',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: 25,
    padding: 10,
    textAlign: 'left',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  options: {
    color: 'white',
    fontSize: 20,
    padding: 5,
    textAlign: 'left',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  numberOptions: {
    // fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 45,
    color: '#19285F',
  },
  header: {
    flex: 20,
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 30,
    paddingBottom: 0,
    paddingHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    width: '70%',
    height: 70,
    backgroundColor: '#3DC15A',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  banner: {
    flex: 100,
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    marginRight: 'auto',

    paddingHorizontal: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);
