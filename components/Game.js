import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Message from './Message';

export default class Game extends Component {

    userNumber;
    randomNumber;
    alert;

    constructor(){
        this.state = { userNumber: null }
        random();
    }

    random() {
        this.state.randomNumber = Math.floor(Math.random() * 100) + 1;
    }

    compare() {
        if(this.state.userNumber === this.state.randomNumber){
            this.setState({
                alert : "FOUND IT, CONGRATS !"
            })
        }
        else if(this.state.userNumber < this.state.randomNumber){
            this.setState({
                alert : "It's more"
            })
        }
        else if(this.state.userNumber > this.state.randomNumber){
            this.setState({
                alert : "It's less"
            })
        }
        else if(this.state.userNumber === null){
            this.setState({
                alert : "Please enter a number"
            })
        }
    }

    render(){
        return(
            <View>
                <Text h1>THE PRICE'S RIGHT</Text>
                <Text>{'\n'}</Text>
                <Button onPress={this.random()} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Reset">Reset</Button>
                <Text>Find the number between 0 and 100</Text>
                <TextInput placeholder="Enter a number" keyboardType={'numeric'} onChangeText={(userNumber) => this.setState({userNumber})} />  
                <Button onPress={this.compare()} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="TRY">TRY</Button>
                <Text>{'\n'}{'\n'}</Text>
                <Message message={this.state.alert} />
            </View>
        );
    }
}
