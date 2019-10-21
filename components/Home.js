import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    goToGame = () => {
        Actions.Game();
    }

    render() {
        return (
            <View>
                <Text style={style.title}>THE PRICE'S RIGHT {"\n"}{"\n"}</Text>
                <Button title="PLAY" onPress="goToGame()" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">PLAY</Button>
            </View>
        );
    }


}

const style = StyleSheet.create({
    title: {
        fontSize: 50
    }
});