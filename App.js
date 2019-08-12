/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component,useState} from 'react';
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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,  
} from 'react-native/Libraries/NewAppScreen';


import GoalItem  from './src/components/GoalItem.js';
import GoalInput  from './src/components/GoalInput.js'


export default function App() {  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const canselAdditHanler = () => {
    setIsAddMode(false);
  };


  return (    
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={canselAdditHanler}/>
      <FlatList 
        data={courseGoals}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <GoalItem 
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler} />
        )} />
    </View>      
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});