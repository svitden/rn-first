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
  Text  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,  
} from 'react-native/Libraries/NewAppScreen';


import PlaceInput from "./src/components/PlaceInput/PlaceInput.js";
import PlaceList from './src/components/PlaceList/PlaceList.js'

class App extends Component {

  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName
        })
      };
    });
  };

  placeDeletedHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  }

  render () {
    return (
      <Fragment>        
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            >        
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  I want to change this screen
                </Text>

                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList 
                  places={this.state.places}
                  onItemDeleted={this.placeDeletedHandler} />
                                      
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
  placeButton: {
    width: "30%",
  }
});

export default App;
