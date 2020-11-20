import React, {useRef, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView ,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')

// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Text, View } from "../components/Themed";
const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View
        style={{
         
          borderRadius: 20,
         
          color: "white",
          padding: 50,
        
        }}
      >
        <ParallaxImage
          source={{uri: item.illustration}}
         
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <Text style={[styles.title]}>Articles</Text>
        <View style={styles.header}></View>
        <View style={[styles.footer]}>
          <Text style={[styles.Articles]}>News</Text>
        
           <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
          <Text style={[styles.Articles]}>News</Text>
          <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
        </View>
    
     
      </SafeAreaView>
   
  );
};
export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3DC15A",
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
   image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
 
  Articles: {
    color: "black",
    padding: 20,
    fontSize: 20,
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
  CardSpace: {
    width: "100%",
    height: "100%",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  header: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3DC15A",
  },
  footer: {
    flex: 20,
    width: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
