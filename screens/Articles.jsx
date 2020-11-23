import React, { useRef, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import axios from 'axios';
const { width: screenWidth } = Dimensions.get('window');

// import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Text, View } from '../components/Themed';
const ENTRIES1 = [
  {
    title: 'COVID-Delayed Arctic Research',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/L873889.jpg',
    link: 'https://www.sciencedaily.com/releases/2020/11/201111180655.htm',
  },
  {
    title: 'Study: Urban Greenery',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/DWVuwMc.jpeg',
    link:
      'https://climate.nasa.gov/news/3043/study-urban-greenery-plays-a-surprising-role-in-greenhouse-gas-emissions/',
  },
  {
    title: 'Beating Back the Tides',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/qKqZtKW.jpg',
    link: 'https://climate.nasa.gov/news/3041/beating-back-the-tides/',
  },
  {
    title: 'Anatomy of Glacial Ice Loss',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UlEkIeo.jpg',
    link: 'https://climate.nasa.gov/news/3038/the-anatomy-of-glacial-ice-loss/',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    link: 'https://www.pinterest.co.uk/pin/520728775635616513/',
  },
];
const ENTRIES2 = [
  {
    title: 'Fishings Hidden Carbon Footprint',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/Kb4BfYO.jpeg',
    link:
      'https://www.newsbreak.com/california/santa-barbara/news/2105400251376/fishings-hidden-carbon-footprint',
  },
  {
    title: 'Highest Carbon Footprint Food',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/qZ2W3WL.jpg',
    link: 'https://ourworldindata.org/food-choice-vs-eating-local',
  },
  {
    title: 'Shopping and Sustainability',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/XZcax9C.jpeg',
    link:
      'https://sourcingjournal.com/topics/sustainability/us-cotton-trust-protocol-holiday-shopping-sustainability-covid-19-244376/',
  },
  {
    title: 'Marijuana and Sustaiability',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/RihhhWt.jpg',
    link: 'https://www.greenentrepreneur.com/article/345097',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    link: 'https://www.sciencedaily.com/releases/2020/11/201111180655.htm',
  },
];
const ENTRIES3 = [
  {
    title: 'The danger to endangered species',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/cQ5E4ID.jpg',
    link:
      'https://enviroliteracy.org/ecosystems/classifying-species/threatened-endangered-species/#:~:text=The%20biggest%20threats%20include%20habitat,exploitation%2C%20and%20pollution%20and%20disease.',
  },
  {
    title: 'Red state animals',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/sxuhpRX.png',
    link:
      'https://www.nationalgeographic.com/animals/2020/11/methane-flares-scorching-birds-us-landfills/',
  },
  {
    title: 'Illegal Snake Killings',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/qxYsdJc.jpg',
    link:
      'https://www.wideopenspaces.com/the-states-where-its-illegal-to-kill-snakes/',
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
    // setEntries(ENTRIES1);
    axios
      .get('http://34.67.243.162:5000/articles')
      .then(function (response) {
        // handle success
        console.log(response.data.articleone, 'articles');
        if (response.data.success) {
          setEntries(response.data.articleone);
          setEntries2(response.data.articletwo);
          setEntries3(response.data.articlethree);
        } else {
          setEntries(ENTRIES1);
          setEntries2(ENTRIES2);
          setEntries3(ENTRIES3);
        }
      })
      .catch((response) => {
        console.log(response.status, 'articles');
        setEntries(ENTRIES1);
        setEntries2(ENTRIES2);
        setEntries3(ENTRIES3);
      });
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
        <Text
          style={styles.title}
          numberOfLines={2}
          onPress={() => {
            Linking.openURL(item.link);
          }}
        >
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DC15A',
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
    color: 'black',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    color: '#3DC15A',
    position: 'relative',
    fontWeight: 'bold',
    padding: 5,
    top: -40,
    textAlign: 'center',
    color: 'white',
  },
  scrollView: {
    borderRadius: 20,
    opacity: 0.9,
    marginTop: 20,
    backgroundColor: 'white',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    position: 'relative',
  },
  CardSpace: {
    width: '100%',
    height: '100%',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3DC15A',
  },
  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
});
