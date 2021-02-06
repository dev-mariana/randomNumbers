import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [number, setNumber] = useState(0);

    function handleNumber() {
        const newNumber = Math.floor(Math.random() * 100);
        setNumber(newNumber);
    };

    return (
        <SafeAreaView style={ style.container }>
            <Text style={ style.number }>{ number }</Text>
            <TouchableOpacity onPress={ handleNumber } style={ style.button }>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        fontSize: 24,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 38,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#fff',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
});

export default App;