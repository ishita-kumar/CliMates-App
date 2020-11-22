import * as React from 'react';
import { Icon } from "react-native-elements";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Text, View } from '../components/Themed';
import { connect } from 'react-redux';
import { logIn, logOut } from '../redux/actionsFile';
import { getUserData } from '../redux/selectors';
import { Checkbox } from 'react-native-paper';

function QuestionThree(props) {
  const [carbon, setCarbon] = React.useState(0);
  const [options, setOptions] = React.useState({
    mobile: false,
    moniter: false,
    desktop: false,
    cable: false,
    coffee: false,
  });
  const carbonValues = {
    mobile: 0.75,
    moniter: 0.5,
    desktop: 9,
    cable: 5.8,
    coffee: 0.75,
  };
  const handleNext = () => {
    let c = carbon;
    for (const [key, value] of Object.entries(options)) {
      if (value) {
        c = c + carbonValues[key];
      }
    }
    props.addCarbon(Math.round(c));
    props.setQuestion(3);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageheader}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/Unplug.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>
          Which of these devices did you remember to unplug ?{' '}
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.mobile ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOptions({ ...options, mobile: !options.mobile });
                }}
              />
            </View>
            <Text style={styles.buttonText}>Mobile Charger</Text>
          </View>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
                color="black"
                status={options.moniter ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOptions({ ...options, moniter: !options.moniter });
                }}
              />
            </View>

            <Text style={styles.buttonText}>A Computer Display</Text>
          </View>
          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
               color="black"
                status={options.desktop ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOptions({ ...options, desktop: !options.desktop });
                }}
              />
            </View>

            <Text style={styles.buttonText}>Desktop</Text>
          </View>

          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
               color="black"
                status={options.cable ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOptions({ ...options, cable: !options.cable });
                }}
              />
            </View>

            <Text style={styles.buttonText}>Digital Cable box</Text>
          </View>

          <View style={styles.checkRow}>
            <View style={styles.checkbox}>
              <Checkbox
               color="black"
                status={options.coffee ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOptions({ ...options, coffee: !options.coffee });
                }}
              />
            </View>
            <Text style={styles.buttonText}>Coffee maker</Text>
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
    borderColor: '#19285F',
    borderWidth: 1,
    backgroundColor: '#3DC15A',
    height: 35,
  },
    nextt: {
    backgroundColor: "#3DC15A",
    alignItems: "center",
    justifyContent: "center",
  },
  checkRow: {
    backgroundColor: '#3DC15A',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  container: {
    flex: 1,

    backgroundColor: '#3DC15A',
  },
  buttonText: {
    fontSize: 25,
    color: "black",
    marginLeft: 10,
  },
  logo: {
    width: 250,
    height: 250,
  },

  nextQuestion: {
    backgroundColor: '#812626',
    borderRadius: 10,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: '#3DC15A',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  header: {
    flex: 20,
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  imageheader: {
    flex: 20,
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
  },
  footer: {
    flex: 8,
    backgroundColor: '#3DC15A',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
  },

  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
  const userData = getUserData(state);
  return { userData };
};
const mapDispatchToProps = { logIn, logOut };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionThree);
