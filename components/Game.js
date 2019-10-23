import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import Message from './Message';

export default class Game extends Component {

    constructor(props){
        super(props);
        this.state = { 
            userNumber: '',
            randomNumber : Math.floor(Math.random() * 100) + 1,
            counter: 0
        }
    }

    random = () => {
        this.setState({
            randomNumber: Math.floor(Math.random() * 100) + 1,
            userNumber: ''
        }); 
    }

    compare = () => {
        if(this.state.userNumber > 0 && this.state.userNumber < 101){
            this.setState({
                counter: this.state.counter + 1
            });
            if(this.state.userNumber == this.state.randomNumber){
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
        }
        else {
            this.setState({
                alert : "Please enter a number between 0 and 100."
            })
        }
    }  

    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    render(){
        return(
            <View>
                <Text h1>THE PRICE'S RIGHT</Text>
                <Text>{'\n'}</Text>
                <Button onPress={this.random} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Reset">Reset</Button>
                <Text>Find the number between 0 and 100</Text>
                <TextInput placeholder="Enter a number between 0 and a 100" onChangeText={(userNumber) => this.setState({userNumber})} />  
                <Button onPress={this.compare} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="TRY" />
                <Text>Try : </Text><Text style={style.counter}>{this.state.counter}</Text>
                <Text>{'\n'}{'\n'}</Text>
                <Message message={this.state.alert} />
                <Text>{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                <Button title="Back" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onPress={this.goToHome} >Back to Home</Button>
            </View>
        );
    }
}

const style = StyleSheet.create({
    counter: {
        color: 'red'
    }
})
