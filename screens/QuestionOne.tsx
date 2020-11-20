import * as React from 'react';
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
function QuestionOne(props) {
  const [carbon, setCarbon] = React.useState(0);
  const handleNext = () => {
    props.addCarbon(Math.round(carbon * 0.453592));
    props.setQuestion(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageheader}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/llama1.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text}>
          What has been your major diet style since your last check in?
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setCarbon(0)} style={styles.button}>
            <Text style={styles.buttonText}>Heavy Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCarbon(147)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Average Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCarbon(257)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Very little Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCarbon(294)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCarbon(331)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Vegan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            handleNext();
          }}
          style={styles.nextQuestion}
        >
          <Text style={{ ...styles.text, color: 'white' }}>Next Question</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#3DC15A',
  },
  buttonText: {
    fontSize: 25,
    color: '#19285F',
  },
  logo: {
    width: 200,
    height: 240,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOne);
