import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard
 } from 'react-native';

import Card from './../components/Card.js';
import Input from './../components/Input.js';
import Colors from './../constants/colors.js';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(''); 
    const [selectedNumber, setSelectedNumber] = useState(); 

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <=0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);        
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Text>Chosen Number: {selectedNumber} </Text>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game!</Text>

                <Card style={styles.inputContainer}>
                    <Text>Select a number</Text>
                    <Input 
                        style={styles.input}
                        autoCapitalize='none'
                        blurOnSubmit
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2} 
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button 
                                title="Reset"                             
                                color={Colors.accent}
                                onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title="Confirm" 
                                onPress={confirmInputHandler}  
                                color={Colors.primary} />
                        </View>                
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>    
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        padding: 20,
        width: 300,
        maxWidth: '80%',        
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100
    },
    input: {
        padding: 5,
        width: 50,                
        textAlign: 'center'
    }
});

export default StartGameScreen;
