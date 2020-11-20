import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Treeicon from '../assets/images/treeiconpng.png';
import * as Animatable from 'react-native-animatable';

export default function Month(props) {
  const trees = [...Array(props.trees).keys()].map((tree) => {
    return (
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={Treeicon}
        style={styles.Trees}
      />
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>You grew {props.trees} trees</Text>
        <Text style={styles.headText}>{props.month}</Text>
      </View>
      <View style={styles.treeContainer}>{trees}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  treeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
  header: {
    padding: 5,
    backgroundColor: '#7A86B1',
    height: 35,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    width: 300,
    borderColor: '#7A86B1',
    borderWidth: 2,
    height: 70,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  Trees: {
    margin: 3,
  },
});
