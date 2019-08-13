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
import {Modal, TouchableHighlight, Alert} from 'react-native';

import GoalItem  from './src/components/GoalItem.js';
import GoalInput  from './src/components/GoalInput.js'


export default function App() {  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  console.log('RE-rendering')
  console.log(courseGoals);


  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }

    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    console.log('to be deleted, goalId', goalId);
    
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });    
  };

  const canselAdditHanler = () => {
    setIsAddMode(false);
  };


  return (    
    <View style={styles.screen}>
      <Button 
        title="Add new goal" 
        onPress={() => setIsAddMode(true)} />
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

      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    </View>      
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});