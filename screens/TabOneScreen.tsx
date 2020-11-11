import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    <View>
    <Text style={styles.title}>Your Dashboard</Text>
     <TouchableOpacity 
        style={styles.button}
      >
        <Text >November</Text>
     </TouchableOpacity>
    </View>
    
      
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
   header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: "#3DC15A",
  },
    button: {
    alignItems: "center", 
    width: 150,
    height: 40,
    backgroundColor: "#3DC15A",
    justifyContent: "center",
    borderRadius: 50,
    flexDirection: "row",
    padding: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
