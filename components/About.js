import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class About extends Component { 
        
    goToHome = () => {
        this.props.navigation.navigate('Home');
    }

    render(){
        return(
            <View>
                <Text style={style.header}>Contributors</Text>
                <Text>{'\n'}</Text>
                {contributors.map((contributor) => (
                    <View key={contributor.id}>
                        <Text style={style.name}>{contributor.name}</Text>
                        <Text style={style.age}>{contributor.age}</Text>
                        <Text>{'\n'}</Text>
                    </View>
                ))}
                <Text>{'\n'}</Text>
                <Button title="Back" onPress={this.goToHome}>Go To Home</Button>
            </View>
        );
    }
}

const contributors = [
    {
    id: 0,
    name: 'Mathieu Gueribout',
    age: 21
    },
    {
        id: 1,
        name: 'Maxime Joullin',
        age: 24
    },
    {
        id: 2,
        name: 'Yanis Verkebe',
        age: 19
    },
    {
        id: 3,
        name: 'Clément Mallet',
        age: 24
    }
]

const style = StyleSheet.create({
    header: {
        fontSize: 50,
        color: 'red'
    },
    name: {
        fontSize: 30,
        color: 'blue'
    },
    age : {
        fontSize : 10,
    }
})
