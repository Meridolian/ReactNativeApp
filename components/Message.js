import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Message extends Component {

    render(){
        return(
            <View>
                <Text style={style.message}>{this.props.message}</Text>
            </View>
        );
    }

}

const style = StyleSheet.create({
    message: {
        color: 'red',
        fontWeight: 'bold'
    }
})