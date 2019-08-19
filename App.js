/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component, useState} from 'react';
import { 
  StyleSheet,  
  View,
  Text,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import Header from './src/components/Header.js';
import StartGameScreen from './src/screens/StartGameScreen.js';
import GameScreen from './src/screens/GameScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (    
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}    
    </View>      
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});