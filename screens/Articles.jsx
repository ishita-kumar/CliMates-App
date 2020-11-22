import React, { useRef, useState, useEffect } from "react";
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Linking
} from "react-native";
import * as Animatable from "react-native-animatable";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
const { width: screenWidth } = Dimensions.get("window");

// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Text, View } from "../components/Themed";
const ENTRIES1 = [
  {
    title: "COVID-Delayed Arctic Research",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/L873889.jpg",
  },
  {
    title: "Study: Urban Greenery",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/DWVuwMc.jpeg",
  },
  {
    title: "Beating Back the Tides",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/qKqZtKW.jpg",
  },
  {
    title: "Anatomy of Glacial Ice Loss",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UlEkIeo.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];
const ENTRIES2 = [
  {
    title: "Fishings Hidden Carbon Footprint",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/Kb4BfYO.jpeg",
  },
  {
    title: "Highest Carbon Footprint Food",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/qZ2W3WL.jpg",
  },
  {
    title: "Shopping and Sustainability",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/XZcax9C.jpeg",
  },
  {
    title: "Marijuana and Sustaiability",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/RihhhWt.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];
const ENTRIES3 = [
  {
    title: "The danger to endangered species",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/cQ5E4ID.jpg",
  },
  {
    title: "Red state animals",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/sxuhpRX.png",
  },
  {
    title: "Illegal Snake Killings",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/qxYsdJc.jpg",
  },

];
const MyCarousel = (props) => {
  const [entries, setEntries] = useState([]);
    const [entries2, setEntries2] = useState([]);
    const [entries3, setEntries3] = useState([]);

  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };


  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);


  useEffect(() => {
    setEntries2(ENTRIES2);
  }, []);

   useEffect(() => {
    setEntries3(ENTRIES3);
  }, []);
  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View
      // style={{

      //   borderRadius: 20,
      //  height:250,
      //   color: "white",
      //   padding: 50,

      // }}
      >
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={{ width: 300, height: 200 }}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
           
        />
        <Text style={styles.title} numberOfLines={2}   onPress={ console.log("RIshabh redirect to articlespage.tsx")} >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView></ScrollView>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.footer]}>
          <Text style={[styles.Articles]}>News</Text>

          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth - 80}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 80}
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
          
          />
          <Text style={[styles.Articles]}>Carbon Footprint</Text>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth - 80}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 80}
            data={entries2}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
            <Text style={[styles.Articles]}>Global Warming</Text>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth - 80}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 80}
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
         
          />
            <Text style={[styles.Articles]}>Endangered Species</Text>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth - 80}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 80}
            data={entries3}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
      </ScrollView>
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
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },

  Articles: {
    color: "black",
    paddingBottom: 10,
    fontSize: 20,
    fontWeight:"bold",
  },

  title: {
    color: "#3DC15A",
    position: "relative",
    fontWeight: "bold",
    padding: 5,
    top: -40,
    textAlign: "center",
    color: "white",
  },
  scrollView: {
    borderRadius: 20,
    opacity: 0.9,
    marginTop: 20,
    backgroundColor: "white",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    position: "relative",
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
