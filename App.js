import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './components/Home';
import Game from './components/Game';

export default class App extends Component {
  render(){
    return <AppNavigator style={styles.container}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const stackNavigator = createStackNavigator(
    {
    Home : {
        screen: Home,
        navigationOptions : {
            title: 'Home',
        }
    },
    Game : {
        screen : Game,
        navigationOptions : {
            title: 'Game',
        }
    }
    },
    {
        initialRouteName: 'Home',
    }
);

const AppNavigator = createAppContainer(stackNavigator);
