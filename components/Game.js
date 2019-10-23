import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import Message from './Message';

export default class Game extends Component {

    constructor(props){
        super(props);
        this.state = { 
            userNumber: '',
            randomNumber : Math.floor(Math.random() * 100) + 1,
            timer: null,
            counter: 0,
            onTimer: false
        }
    }

    random = () => {
        this.setState({
            randomNumber: Math.floor(Math.random() * 100) + 1,
            userNumber: '',
            counter: 0,
            onTimer: false
        }); 
        clearInterval(this.timerId);
    }

    compare = () => {
        if(this.state.userNumber > 0 && this.state.userNumber < 101){
            this.setState({
                counter: this.state.counter + 1,
                onTimer: true
            });
            if(this.state.counter > 0 && this.state.counter < 2){
                this.onTimeEvent();
            }
            if(this.state.userNumber == this.state.randomNumber){
                this.setState({
                    alert : "CONGRATS ! You found it in " + this.state.counter + " try, in " + this.state.timer 
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

    onTimeEvent = () => {
        this.timerId = setInterval(this.timerFunc, 1000);
    }

    timerFunc = () => {
        var temp = new Date();
        this.setState({
            timer: temp
        })
    }

    numericNumber = text => {
        if (/^[1-9][0-9]?$|^100$/.test(text) || text === "") {
            this.setState({
                userNumber: text
            });
        }
    };

    render(){
        return(
            <View>
                <Text h1>THE PRICE'S RIGHT</Text>
                <Text>{'\n'}</Text>
                <Button onPress={this.random} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Reset">Reset</Button>
                <Text>Find the number between 0 and 100</Text>
                <TextInput keyboardType="numeric" onChangeText={this.numericNumber} value={this.state.userNumber} maxLength={3} /> 
                <Button onPress={this.compare} class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="TRY" />
                <Text>Try : </Text><Text style={style.counter}>{this.state.counter}</Text>
                <Text>{'\n'}</Text>
                <Text style={style.timer}>{this.state.timer}</Text>
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
        fontSize: 20,
        color: 'red'
    },
    timer: {
        fontSize: 30,
        color: 'blue'
    }
})
