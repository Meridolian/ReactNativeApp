import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Game from './components/game'

export default function App() {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//A FAIRE LES ROUTES !!!!!!!!!!
