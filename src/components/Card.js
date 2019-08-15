import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};


const styles = StyleSheet.create({    
    card: {    
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.3,
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 3,
    }
});

export default Card;
