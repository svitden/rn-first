import React from 'react';

import {       
    StyleSheet,
    FlatList
} from 'react-native';

import ListItem from './../ListItem/ListItem.js';

const PlaceList = props => {

    // const placeOutput = props.places.map((place,id) => {      
    //   return <ListItem 
    //     key={id}
    //     placeName={place}
    //     onItemPressed={() => props.onItemDeleted(id)} />
    // });

    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => {
                return (
                    <ListItem                     
                        placeName={info.item.value}
                        onItemPressed={() => props.onItemDeleted(info.item.key)} />
                );
            }}>            
        </FlatList> 
    )
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
