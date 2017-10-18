import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base'

const instructions = Platform.select({
    ios: 'Your device: iOS.\n' +
    'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Your device: Android\n' +
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    render() {
        return (
            <Container>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Personal Information Manager Project
                </Text>
                <Text style={styles.welcome}>
                    Group 22
                </Text>
                <Text style={styles.instructions}>
                    The PIMP is made as a group project in
                    the course IT2810 Web Development at NTNU.
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});