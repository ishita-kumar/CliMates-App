import * as React from 'react';
import { Icon } from "react-native-elements";
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
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

function QuestionTwo(props) {
  const [carbon, setCarbon] = React.useState(877);
  const handleNext = () => {
    const carbo = 877 - carbon;
    props.addCarbon(Math.round(carbo * 0.453592 * 0.99));
    props.addKW(carbo)
    props.setQuestion(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.imageheader}>
      <Icon
          raised
          name="arrow-left"
          type="font-awesome"
          color="#f50"
          style={styles.nextt}
          onPress={() => {
           console.log("Rishabh put go back to articles page")
          }}
        />
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../assets/images/seal.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.header}>
      
        <Text style={styles.title}>
      COVID-Delayed Arctic Research
        </Text>
        
      </View>
    
     <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
     <ScrollView>
       <Text style={styles.text}>
      Maintaining the continuity of long-term observations is crucial as the region is affected by climate change. For example, the researchers collected sediments and small bottom-dwelling animals to help document harmful algal blooms that are becoming more common as Arctic waters warm. 
      The blooms pose a threat to the humans and marine mammals that eat them.
    </Text>
     <Text style={styles.text}>
     Because of pandemic-related delays, the cruise began on Oct. 2 -- a much later start than originally planned. Historically, the Bering and Chukchi sea ecosystem transitioned to lower-level activity as sea ice formed in October.
    </Text>
 <Text style={styles.text}>
    This year, unseasonably warm ocean temperatures delayed sea ice formation by several weeks. The lack of ice likely allowed the greater biological activity observed by the researchers.
    </Text>

     </ScrollView>
      
      
      </Animatable.View>
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
    title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  logo: {
    width: 240,
    height: 230,
  },
  nextt: {
     right:20,
    backgroundColor: "#3DC15A",
    alignItems: "center",
    justifyContent: "center",
  },
  nextQuestion: {
    backgroundColor: '#812626',
    borderRadius: 10,
    paddingVertical: 15,
  },
      nextt: {
    backgroundColor: "#3DC15A",
    
  },
 

  buttonContainer: {
    backgroundColor: '#3DC15A',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'center',
  },
  header: {
    flex: 10,
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
  },
  imageheader: {
    backgroundColor: '#3DC15A',
    borderTopLeftRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
  },
    scrollView: {
    backgroundColor: "white",
  },
  footer: {
    flex: 40,
  
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  text: {
    color: 'black',
    fontSize: 15,
    textAlign: 'justify',
    letterSpacing: -0.02,
 
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
