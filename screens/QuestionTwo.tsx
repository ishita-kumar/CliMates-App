import * as React from 'react';
import { Icon } from 'react-native-elements';

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
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import axios from 'axios';

function QuestionTwo(props) {
  const [carbon, setCarbon] = React.useState(0);
  const handleNext = () => {
    const carbo = carbon != 0 ? 877 - carbon : 877;
    props.addCarbon(Math.round(carbo * 0.453592 * 0.99));
    props.addKW(carbo);
    props.setQuestion(2);
  };
  const handleSync = () => {
    axios
      .get('http://34.67.243.162:5000/profile/energy')
      .then((r) => {
        console.log(r.data.energy);
        if (r.data.success) {
          setCarbon(r.data.energy);
        }
      })
      .catch((response) => {
        const val = Math.random() * 500;
        setCarbon(val + 600);
        return;
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageheader}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/Electricity.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>
          Input your electricity consumption in Kwh
        </Text>
        <View style={styles.buttonContainer}>
          <TextInput
            // selectionColor="#3DC15A"
            // underlineColor="#3DC15A"
            defaultValue={carbon.toString()}
            style={styles.textInput}
            // value = {toString(carbon)}
            keyboardType={'numbers-and-punctuation'}
            enablesReturnKeyAutomatically={true}
            onChangeText={(text) => setCarbon(parseInt(text))}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button color="#f50" onPress={() => handleSync()}>
          Sync my data from electricity provider{' '}
        </Button>
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
  textInput: {
    width: '80%',
    backgroundColor: 'white',
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#3DC15A',
  },
  buttonText: {
    fontSize: 25,
    color: '#19285F',
  },
  logo: {
    width: 240,
    height: 230,
  },
  nextt: {
    backgroundColor: '#3DC15A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextQuestion: {
    backgroundColor: '#812626',
    borderRadius: 10,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },

  buttonContainer: {
    backgroundColor: '#3DC15A',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionTwo);
