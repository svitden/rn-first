/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,  
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  state = {
    placeName: ''
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    })
  }

  render () {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >        
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  I want to change this screen and once again
                </Text>
                <View style={styles.inputContainer}> 
                  <TextInput
                    style={styles.input}
                    value={this.state.placeName} 
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                    placeholder="an awersome place"
                  />
                  <Button 
                    title="Add" 
                    styles={styles.placeButton}/> 
                </View>                        
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }  
};

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,    
    justifyContent: "flex-start",
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 300,
    borderColor: "lightgrey",
    borderWidth: 1
  },
  placeInput: {
    width: "70%",

  },
  placeButton: {
    width: "30%",
  }
});

export default App;
