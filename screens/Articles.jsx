import * as React from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Carousel from 'react-native-snap-carousel';

// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Text, View } from "../components/Themed";



export default class Articles extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'black',
              borderRadius: 5,
              height: 250,
              color:"white",
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30,color:"white"}}>{item.title}</Text>
            <Text style={{fontSize: 30,color:"white"}}>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
     
            <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Text style={[styles.title]}>Articles</Text>
      <View style={styles.header}></View>
      <View style={[styles.footer]}>
      <Text style={[styles.title]}>Make a difference</Text>
         <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
       
      </View>
    </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  CardSpace:{
    width:"100%",
    height:"100%"
  },

  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flex: 1,
    marginTop:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3DC15A",
  },
  footer: {
    flex: 20,
    opacity: 0.5,
    width: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
