import React, {useState} from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    
  
    return (
        <TouchableOpacity 
            onPress={() => props.onDelete(props.id)}
            activeOpacity={0.7}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5, 
        padding: 10,
        backgroundColor: '#eee'
    }
});

export default GoalItem
