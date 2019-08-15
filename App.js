/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import Header from './src/components/Header.js';
import StartGameScreen from './src/screens/StartGameScreen.js';


export default function App() { 
  return (    
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>      
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});