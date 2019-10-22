import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    
    goToGame = () => {
        this.props.navigation.navigate('Game');
    }

    goToAbout = () => {
        this.props.navigation.navigate('About');
    }

    render() {
        return (
            <View>
                <Text style={style.title}>THE PRICE'S RIGHT</Text>
                <Text>{"\n"}{"\n"}</Text>
                <Button title="PLAY" onPress={this.goToGame} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" />
                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <Button title="About" onPress={this.goToAbout} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" />
            </View>
        );
    }


}

const style = StyleSheet.create({
    title: {
        marginTop: 50,
        fontSize: 40,
        textAlign: "center"
    }
});